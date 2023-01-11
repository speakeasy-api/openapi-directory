import dataclasses
from typing import Any,Optional
from ..shared import servicecredentialtypescollection as shared_servicecredentialtypescollection


@dataclasses.dataclass
class ListServiceCredentialTypesQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceCredentialTypesRequest:
    query_params: ListServiceCredentialTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListServiceCredentialTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_credential_types_collection: Optional[shared_servicecredentialtypescollection.ServiceCredentialTypesCollection] = dataclasses.field(default=None)
    
