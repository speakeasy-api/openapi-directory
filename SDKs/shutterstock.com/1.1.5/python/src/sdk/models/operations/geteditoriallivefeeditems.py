import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetEditorialLivefeedItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEditorialLivefeedItemsQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEditorialLivefeedItemsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialLivefeedItemsRequest:
    path_params: GetEditorialLivefeedItemsPathParams = dataclasses.field()
    query_params: GetEditorialLivefeedItemsQueryParams = dataclasses.field()
    security: GetEditorialLivefeedItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialLivefeedItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_content_data_list: Optional[Any] = dataclasses.field(default=None)
    
