import dataclasses
from typing import Optional
from ..shared import writableinterfacetemplate as shared_writableinterfacetemplate
from ..shared import interfacetemplate as shared_interfacetemplate


@dataclasses.dataclass
class DcimInterfaceTemplatesCreateRequest:
    request: shared_writableinterfacetemplate.WritableInterfaceTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInterfaceTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface_template: Optional[shared_interfacetemplate.InterfaceTemplate] = dataclasses.field(default=None)
    
