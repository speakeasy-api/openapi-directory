import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IosModelFormFactorEnum(str, Enum):
    DEVICE_FORM_FACTOR_UNSPECIFIED = "DEVICE_FORM_FACTOR_UNSPECIFIED"
    PHONE = "PHONE"
    TABLET = "TABLET"
    WEARABLE = "WEARABLE"


@dataclass_json
@dataclasses.dataclass
class IosModel:
    r"""IosModel
    A description of an iOS device tests may be run on.
    """
    
    device_capabilities: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCapabilities') }})
    form_factor: Optional[IosModelFormFactorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    screen_density: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenDensity') }})
    screen_x: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenX') }})
    screen_y: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenY') }})
    supported_version_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedVersionIds') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
