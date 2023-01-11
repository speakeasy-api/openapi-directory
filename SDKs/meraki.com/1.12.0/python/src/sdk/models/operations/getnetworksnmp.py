import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSnmpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSnmpRequest:
    path_params: GetNetworkSnmpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSnmpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_snmp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
