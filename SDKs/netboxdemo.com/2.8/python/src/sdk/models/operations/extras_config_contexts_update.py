import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableconfigcontext as shared_writableconfigcontext
from ..shared import configcontext as shared_configcontext


@dataclasses.dataclass
class ExtrasConfigContextsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasConfigContextsUpdateRequest:
    path_params: ExtrasConfigContextsUpdatePathParams = dataclasses.field()
    request: shared_writableconfigcontext.WritableConfigContextInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasConfigContextsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_context: Optional[shared_configcontext.ConfigContext] = dataclasses.field(default=None)
    
