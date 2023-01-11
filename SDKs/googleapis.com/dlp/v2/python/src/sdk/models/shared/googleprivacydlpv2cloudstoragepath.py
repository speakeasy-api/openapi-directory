import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CloudStoragePath:
    r"""GooglePrivacyDlpV2CloudStoragePath
    Message representing a single file or path in Cloud Storage.
    """
    
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
