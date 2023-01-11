import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revisiontemplate as shared_revisiontemplate
from ..shared import traffictarget as shared_traffictarget
from ..shared import traffictarget as shared_traffictarget


@dataclass_json
@dataclasses.dataclass
class ServiceSpec:
    r"""ServiceSpec
    ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
    """
    
    template: Optional[shared_revisiontemplate.RevisionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    traffic: Optional[list[shared_traffictarget.TrafficTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    

@dataclass_json
@dataclasses.dataclass
class ServiceSpecInput:
    r"""ServiceSpecInput
    ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
    """
    
    template: Optional[shared_revisiontemplate.RevisionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    traffic: Optional[list[shared_traffictarget.TrafficTargetInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    
