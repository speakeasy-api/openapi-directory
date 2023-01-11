import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apk as shared_apk


@dataclass_json
@dataclasses.dataclass
class ApksListResponse:
    r"""ApksListResponse
    Response listing all APKs.
    """
    
    apks: Optional[list[shared_apk.Apk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apks') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
