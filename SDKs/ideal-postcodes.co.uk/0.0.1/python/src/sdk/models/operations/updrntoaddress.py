import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import errorresponseschema as shared_errorresponseschema
from ..shared import udprntoaddressresponseschema as shared_udprntoaddressresponseschema


@dataclasses.dataclass
class UpdrnToAddressPathParams:
    udprn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'udprn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdrnToAddressQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdrnToAddressSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class UpdrnToAddressRequest:
    path_params: UpdrnToAddressPathParams = dataclasses.field()
    query_params: UpdrnToAddressQueryParams = dataclasses.field()
    security: UpdrnToAddressSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdrnToAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_schema: Optional[shared_errorresponseschema.ErrorResponseSchema] = dataclasses.field(default=None)
    udprn_to_address_response_schema: Optional[shared_udprntoaddressresponseschema.UdprnToAddressResponseSchema] = dataclasses.field(default=None)
    
