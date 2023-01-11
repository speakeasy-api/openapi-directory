import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchLinkAggregationsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchLinkAggregationsRequest:
    path_params: GetNetworkSwitchLinkAggregationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchLinkAggregationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_link_aggregations_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
