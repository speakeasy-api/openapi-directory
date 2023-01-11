import dataclasses
from typing import Optional
from ..shared import setequalizervaluesrequest as shared_setequalizervaluesrequest


@dataclasses.dataclass
class SetEqualizerValuesRequest:
    request: shared_setequalizervaluesrequest.SetEqualizerValuesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetEqualizerValuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_equalizer_values_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
