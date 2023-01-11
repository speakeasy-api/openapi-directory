import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import issue_event as shared_issue_event


@dataclasses.dataclass
class IssuesGetEventPathParams:
    event_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesGetEventRequest:
    path_params: IssuesGetEventPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesGetEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    issue_event: Optional[shared_issue_event.IssueEvent] = dataclasses.field(default=None)
    
