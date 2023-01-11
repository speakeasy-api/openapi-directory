import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import wireless as shared_wireless


@dataclasses.dataclass
class GetWirelessLaNsQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWirelessLaNsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetWirelessLaNsRequest:
    query_params: GetWirelessLaNsQueryParams = dataclasses.field()
    security: GetWirelessLaNsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWirelessLaNsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wirelesses: Optional[list[shared_wireless.Wireless]] = dataclasses.field(default=None)
    
