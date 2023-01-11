import dataclasses
from typing import Any,Optional
from ..shared import servicecredentialscollection as shared_servicecredentialscollection


@dataclasses.dataclass
class ListServiceCredentialsQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceCredentialsRequest:
    query_params: ListServiceCredentialsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListServiceCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_credentials_collection: Optional[shared_servicecredentialscollection.ServiceCredentialsCollection] = dataclasses.field(default=None)
    
