import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerimage as shared_containerimage
from ..shared import vmimage as shared_vmimage


@dataclass_json
@dataclasses.dataclass
class Environment:
    r"""Environment
    Definition of a software environment that is used to start a notebook instance.
    """
    
    container_image: Optional[shared_containerimage.ContainerImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    post_startup_script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    vm_image: Optional[shared_vmimage.VMImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    

@dataclass_json
@dataclasses.dataclass
class EnvironmentInput:
    r"""EnvironmentInput
    Definition of a software environment that is used to start a notebook instance.
    """
    
    container_image: Optional[shared_containerimage.ContainerImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    post_startup_script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    vm_image: Optional[shared_vmimage.VMImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    
