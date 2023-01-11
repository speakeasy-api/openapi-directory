import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicespec as shared_devicespec


@dataclass_json
@dataclasses.dataclass
class Variant:
    r"""Variant
    APK that is suitable for inclusion in a system image. The resource of SystemApksService.
    """
    
    device_spec: Optional[shared_devicespec.DeviceSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSpec') }})
    variant_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantId') }})
    

@dataclass_json
@dataclasses.dataclass
class VariantInput:
    r"""VariantInput
    APK that is suitable for inclusion in a system image. The resource of SystemApksService.
    """
    
    device_spec: Optional[shared_devicespec.DeviceSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSpec') }})
    
