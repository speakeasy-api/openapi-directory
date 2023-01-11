import dataclasses
from typing import Optional
from ..shared import sourcewrapped as shared_sourcewrapped


@dataclasses.dataclass
class GetResourcesSourcesJSONQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesSourcesJSONRequest:
    query_params: GetResourcesSourcesJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesSourcesJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    source_wrappeds: Optional[list[shared_sourcewrapped.SourceWrapped]] = dataclasses.field(default=None)
    
