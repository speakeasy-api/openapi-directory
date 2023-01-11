import dataclasses
from typing import Optional
from ..shared import configcontext as shared_configcontext


@dataclasses.dataclass
class ExtrasConfigContextsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasConfigContextsReadRequest:
    path_params: ExtrasConfigContextsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasConfigContextsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_context: Optional[shared_configcontext.ConfigContext] = dataclasses.field(default=None)
    
