import dataclasses
from typing import Optional
from enum import Enum
from ..shared import personinclude_enum as shared_personinclude_enum
from ..shared import orgclassification_enum as shared_orgclassification_enum
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import personlist as shared_personlist


@dataclasses.dataclass
class PeopleSearchPeopleGetQueryParams:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    district: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_personinclude_enum.PersonIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    org_classification: Optional[shared_orgclassification_enum.OrgClassificationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'org_classification', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PeopleSearchPeopleGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PeopleSearchPeopleGetRequest:
    headers: PeopleSearchPeopleGetHeaders = dataclasses.field()
    query_params: PeopleSearchPeopleGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PeopleSearchPeopleGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    person_list: Optional[shared_personlist.PersonList] = dataclasses.field(default=None)
    
