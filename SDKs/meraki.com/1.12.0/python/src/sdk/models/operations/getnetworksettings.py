import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSettingsRequest:
    path_params: GetNetworkSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
