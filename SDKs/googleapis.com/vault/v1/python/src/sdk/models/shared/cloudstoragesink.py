import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudstoragefile as shared_cloudstoragefile


@dataclass_json
@dataclasses.dataclass
class CloudStorageSink:
    r"""CloudStorageSink
    Export sink for Cloud Storage files.
    """
    
    files: Optional[list[shared_cloudstoragefile.CloudStorageFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
