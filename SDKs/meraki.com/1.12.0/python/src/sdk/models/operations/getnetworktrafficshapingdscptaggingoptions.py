import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkTrafficShapingDscpTaggingOptionsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkTrafficShapingDscpTaggingOptionsRequest:
    path_params: GetNetworkTrafficShapingDscpTaggingOptionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkTrafficShapingDscpTaggingOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_traffic_shaping_dscp_tagging_options_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
