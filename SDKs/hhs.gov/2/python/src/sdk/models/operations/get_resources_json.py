import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetResourcesJSONQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesJSONRequest:
    query_params: GetResourcesJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_wrappeds: Optional[list[Any]] = dataclasses.field(default=None)
    
