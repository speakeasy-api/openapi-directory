import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetHealthQueryParams:
    bundles: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bundles', 'style': 'form', 'explode': True }})
    plugins: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'plugins', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHealthRequest:
    query_params: GetHealthQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
