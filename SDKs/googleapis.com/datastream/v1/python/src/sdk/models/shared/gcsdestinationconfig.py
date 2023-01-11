import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jsonfileformat as shared_jsonfileformat


@dataclass_json
@dataclasses.dataclass
class GcsDestinationConfig:
    r"""GcsDestinationConfig
    Google Cloud Storage destination configuration
    """
    
    avro_file_format: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avroFileFormat') }})
    file_rotation_interval: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileRotationInterval') }})
    file_rotation_mb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileRotationMb') }})
    json_file_format: Optional[shared_jsonfileformat.JSONFileFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonFileFormat') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
