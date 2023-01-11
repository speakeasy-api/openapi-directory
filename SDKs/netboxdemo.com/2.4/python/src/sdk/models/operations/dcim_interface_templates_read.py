import dataclasses
from typing import Optional
from ..shared import interfacetemplate as shared_interfacetemplate


@dataclasses.dataclass
class DcimInterfaceTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfaceTemplatesReadRequest:
    path_params: DcimInterfaceTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfaceTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface_template: Optional[shared_interfacetemplate.InterfaceTemplate] = dataclasses.field(default=None)
    
