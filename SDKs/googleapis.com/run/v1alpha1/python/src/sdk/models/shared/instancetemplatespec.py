import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancespec as shared_instancespec


@dataclass_json
@dataclasses.dataclass
class InstanceTemplateSpec:
    r"""InstanceTemplateSpec
    InstanceTemplateSpec describes the data an instance should have when created from a template.
    """
    
    spec: Optional[shared_instancespec.InstanceSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
