import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPISocialNumberHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPISocialNumberRequest:
    headers: GetAPISocialNumberHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAPISocialNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
