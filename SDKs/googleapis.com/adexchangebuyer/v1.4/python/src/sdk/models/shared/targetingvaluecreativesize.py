import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingvaluesize as shared_targetingvaluesize


@dataclass_json
@dataclasses.dataclass
class TargetingValueCreativeSize:
    r"""TargetingValueCreativeSize
    Next Id: 7
    """
    
    allowed_formats: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedFormats') }})
    companion_sizes: Optional[list[shared_targetingvaluesize.TargetingValueSize]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionSizes') }})
    creative_size_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSizeType') }})
    native_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeTemplate') }})
    size: Optional[shared_targetingvaluesize.TargetingValueSize] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    skippable_ad_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableAdType') }})
    
