import dataclasses
from typing import Optional
from ..shared import rearporttemplate as shared_rearporttemplate


@dataclasses.dataclass
class DcimRearPortTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRearPortTemplatesReadRequest:
    path_params: DcimRearPortTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRearPortTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rear_port_template: Optional[shared_rearporttemplate.RearPortTemplate] = dataclasses.field(default=None)
    
