import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platformtype as shared_platformtype


@dataclass_json
@dataclasses.dataclass
class PlatformTypesListResponse:
    r"""PlatformTypesListResponse
    Platform Type List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    platform_types: Optional[list[shared_platformtype.PlatformType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformTypes') }})
    
