import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import variant as shared_variant


@dataclass_json
@dataclasses.dataclass
class SystemApksListResponse:
    r"""SystemApksListResponse
    Response to list previously created system APK variants.
    """
    
    variants: Optional[list[shared_variant.Variant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    
