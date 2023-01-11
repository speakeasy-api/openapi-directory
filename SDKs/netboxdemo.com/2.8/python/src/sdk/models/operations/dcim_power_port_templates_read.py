import dataclasses
from typing import Optional
from ..shared import powerporttemplate as shared_powerporttemplate


@dataclasses.dataclass
class DcimPowerPortTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPortTemplatesReadRequest:
    path_params: DcimPowerPortTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerPortTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    power_port_template: Optional[shared_powerporttemplate.PowerPortTemplate] = dataclasses.field(default=None)
    
