import dataclasses
from typing import Optional
from ..shared import issue_event as shared_issue_event
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class IssuesListEventsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListEventsForRepoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListEventsForRepoRequest:
    path_params: IssuesListEventsForRepoPathParams = dataclasses.field()
    query_params: IssuesListEventsForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListEventsForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    issue_events: Optional[list[shared_issue_event.IssueEvent]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
