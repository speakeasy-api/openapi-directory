import dataclasses
from typing import Optional


@dataclasses.dataclass
class PricingQueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PricingRequest:
    query_params: PricingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PricingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
