import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudStorage:
    r"""GoogleCloudStorage
    A storage location within Google cloud storage (GCS).
    """
    
    gcs_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsPath') }})
    
