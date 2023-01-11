import dataclasses
from typing import Any


@dataclasses.dataclass
class SmsConversionQueryParams:
    delivered: Any = dataclasses.field(metadata={'query_param': { 'field_name': 'delivered', 'style': 'form', 'explode': True }})
    message_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'message-id', 'style': 'form', 'explode': True }})
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SmsConversionRequest:
    query_params: SmsConversionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SmsConversionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
