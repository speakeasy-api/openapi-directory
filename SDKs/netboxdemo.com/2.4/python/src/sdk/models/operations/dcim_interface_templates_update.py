import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableinterfacetemplate as shared_writableinterfacetemplate
from ..shared import interfacetemplate as shared_interfacetemplate


@dataclasses.dataclass
class DcimInterfaceTemplatesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfaceTemplatesUpdateRequest:
    path_params: DcimInterfaceTemplatesUpdatePathParams = dataclasses.field()
    request: shared_writableinterfacetemplate.WritableInterfaceTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInterfaceTemplatesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface_template: Optional[shared_interfacetemplate.InterfaceTemplate] = dataclasses.field(default=None)
    
