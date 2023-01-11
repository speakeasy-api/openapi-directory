import dataclasses
from typing import Optional
from ..shared import writableconfigcontext as shared_writableconfigcontext
from ..shared import configcontext as shared_configcontext


@dataclasses.dataclass
class ExtrasConfigContextsCreateRequest:
    request: shared_writableconfigcontext.WritableConfigContextInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasConfigContextsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_context: Optional[shared_configcontext.ConfigContext] = dataclasses.field(default=None)
    
