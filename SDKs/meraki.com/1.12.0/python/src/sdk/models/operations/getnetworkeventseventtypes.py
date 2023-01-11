import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkEventsEventTypesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkEventsEventTypesRequest:
    path_params: GetNetworkEventsEventTypesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkEventsEventTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_events_event_types_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
