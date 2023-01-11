import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkAlertsSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkAlertsSettingsRequest:
    path_params: GetNetworkAlertsSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkAlertsSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_alerts_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
