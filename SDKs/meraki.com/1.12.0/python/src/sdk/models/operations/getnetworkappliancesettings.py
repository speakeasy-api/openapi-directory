import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceSettingsRequest:
    path_params: GetNetworkApplianceSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
