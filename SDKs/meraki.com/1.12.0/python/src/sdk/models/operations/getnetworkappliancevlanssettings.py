import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceVlansSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceVlansSettingsRequest:
    path_params: GetNetworkApplianceVlansSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceVlansSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_vlans_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
