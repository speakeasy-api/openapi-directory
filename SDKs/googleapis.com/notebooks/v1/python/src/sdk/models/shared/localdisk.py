import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localdiskinitializeparams as shared_localdiskinitializeparams
from ..shared import runtimeguestosfeature as shared_runtimeguestosfeature


@dataclass_json
@dataclasses.dataclass
class LocalDiskInput:
    r"""LocalDiskInput
    A Local attached disk resource.
    """
    
    initialize_params: Optional[shared_localdiskinitializeparams.LocalDiskInitializeParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializeParams') }})
    interface: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class LocalDisk:
    r"""LocalDisk
    A Local attached disk resource.
    """
    
    auto_delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDelete') }})
    boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boot') }})
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    guest_os_features: Optional[list[shared_runtimeguestosfeature.RuntimeGuestOsFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestOsFeatures') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    initialize_params: Optional[shared_localdiskinitializeparams.LocalDiskInitializeParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializeParams') }})
    interface: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    licenses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
