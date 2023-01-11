import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchSettingsRequest:
    path_params: GetNetworkSwitchSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
