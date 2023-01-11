import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessRfProfilesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessRfProfilesQueryParams:
    include_template_profiles: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTemplateProfiles', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkWirelessRfProfilesRequest:
    path_params: GetNetworkWirelessRfProfilesPathParams = dataclasses.field()
    query_params: GetNetworkWirelessRfProfilesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessRfProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_rf_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
