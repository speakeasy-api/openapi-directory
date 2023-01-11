import dataclasses
from typing import Any


@dataclasses.dataclass
class VoiceConversionQueryParams:
    delivered: Any = dataclasses.field(metadata={'query_param': { 'field_name': 'delivered', 'style': 'form', 'explode': True }})
    message_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'message-id', 'style': 'form', 'explode': True }})
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VoiceConversionRequest:
    query_params: VoiceConversionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VoiceConversionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
