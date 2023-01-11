import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetQtlListByPositionUsingGetPathParams:
    chr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chr', 'style': 'simple', 'explode': False }})
    map_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    start: int = dataclasses.field(metadata={'path_param': { 'field_name': 'start', 'style': 'simple', 'explode': False }})
    stop: int = dataclasses.field(metadata={'path_param': { 'field_name': 'stop', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetQtlListByPositionUsingGetRequest:
    path_params: GetQtlListByPositionUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQtlListByPositionUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
