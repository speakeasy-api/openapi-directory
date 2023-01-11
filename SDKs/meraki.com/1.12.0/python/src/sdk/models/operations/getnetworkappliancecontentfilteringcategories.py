import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceContentFilteringCategoriesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceContentFilteringCategoriesRequest:
    path_params: GetNetworkApplianceContentFilteringCategoriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceContentFilteringCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_content_filtering_categories_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
