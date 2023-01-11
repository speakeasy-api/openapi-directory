import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2envvarsource as shared_googlecloudrunv2envvarsource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2EnvVar:
    r"""GoogleCloudRunV2EnvVar
    EnvVar represents an environment variable present in a Container.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_source: Optional[shared_googlecloudrunv2envvarsource.GoogleCloudRunV2EnvVarSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueSource') }})
    
