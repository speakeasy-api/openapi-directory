import dataclasses
from typing import Optional
from ..shared import sourcewrapped as shared_sourcewrapped


@dataclasses.dataclass
class GetResourcesSourcesIDJSONPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesSourcesIDJSONRequest:
    path_params: GetResourcesSourcesIDJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesSourcesIDJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    source_wrappeds: Optional[list[shared_sourcewrapped.SourceWrapped]] = dataclasses.field(default=None)
    
