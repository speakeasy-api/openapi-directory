import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SplitNetworkPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SplitNetworkRequest:
    path_params: SplitNetworkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SplitNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    split_network_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
