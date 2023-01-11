import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPIMiscCulturesHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIMiscCulturesRequest:
    headers: GetAPIMiscCulturesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIMiscCulturesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
