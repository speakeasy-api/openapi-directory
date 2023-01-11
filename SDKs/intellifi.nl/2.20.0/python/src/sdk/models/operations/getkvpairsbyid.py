import dataclasses
from typing import Optional
from ..shared import keyvaluepair as shared_keyvaluepair


@dataclasses.dataclass
class GetKvPairsByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetKvPairsByIDRequest:
    path_params: GetKvPairsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetKvPairsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    key_value_pair: Optional[shared_keyvaluepair.KeyValuePair] = dataclasses.field(default=None)
    
