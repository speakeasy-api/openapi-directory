import dataclasses
from typing import Optional
from ..shared import keyvaluepair as shared_keyvaluepair
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddKvPairsRequest:
    request: shared_keyvaluepair.KeyValuePairInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddKvPairsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
