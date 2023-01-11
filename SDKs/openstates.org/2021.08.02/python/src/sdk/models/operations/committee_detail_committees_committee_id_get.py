import dataclasses
from typing import Optional
from enum import Enum
from ..shared import committeeinclude_enum as shared_committeeinclude_enum
from ..shared import committee as shared_committee
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class CommitteeDetailCommitteesCommitteeIDGetPathParams:
    committee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommitteeDetailCommitteesCommitteeIDGetQueryParams:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_committeeinclude_enum.CommitteeIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CommitteeDetailCommitteesCommitteeIDGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommitteeDetailCommitteesCommitteeIDGetRequest:
    headers: CommitteeDetailCommitteesCommitteeIDGetHeaders = dataclasses.field()
    path_params: CommitteeDetailCommitteesCommitteeIDGetPathParams = dataclasses.field()
    query_params: CommitteeDetailCommitteesCommitteeIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CommitteeDetailCommitteesCommitteeIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    committee: Optional[shared_committee.Committee] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
