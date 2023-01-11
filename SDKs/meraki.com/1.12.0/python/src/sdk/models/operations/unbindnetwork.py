import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class UnbindNetworkPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnbindNetworkRequest:
    path_params: UnbindNetworkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UnbindNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    unbind_network_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
