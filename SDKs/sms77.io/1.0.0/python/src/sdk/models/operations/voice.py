import dataclasses
from typing import Optional


@dataclasses.dataclass
class VoiceQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    to: str = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    xml: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'xml', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VoiceRequest:
    query_params: VoiceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VoiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
