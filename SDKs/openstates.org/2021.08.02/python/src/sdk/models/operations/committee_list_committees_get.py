import dataclasses
from typing import Optional
from enum import Enum
from ..shared import orgclassification_enum as shared_orgclassification_enum
from ..shared import committeeclassification_enum as shared_committeeclassification_enum
from ..shared import committeeinclude_enum as shared_committeeinclude_enum
from ..shared import committeelist as shared_committeelist
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class CommitteeListCommitteesGetQueryParams:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    chamber: Optional[shared_orgclassification_enum.OrgClassificationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'chamber', 'style': 'form', 'explode': True }})
    classification: Optional[shared_committeeclassification_enum.CommitteeClassificationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_committeeinclude_enum.CommitteeIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CommitteeListCommitteesGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommitteeListCommitteesGetRequest:
    headers: CommitteeListCommitteesGetHeaders = dataclasses.field()
    query_params: CommitteeListCommitteesGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CommitteeListCommitteesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    committee_list: Optional[shared_committeelist.CommitteeList] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
