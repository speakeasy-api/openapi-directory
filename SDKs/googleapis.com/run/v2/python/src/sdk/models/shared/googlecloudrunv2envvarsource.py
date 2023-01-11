import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2secretkeyselector as shared_googlecloudrunv2secretkeyselector


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2EnvVarSource:
    r"""GoogleCloudRunV2EnvVarSource
    EnvVarSource represents a source for the value of an EnvVar.
    """
    
    secret_key_ref: Optional[shared_googlecloudrunv2secretkeyselector.GoogleCloudRunV2SecretKeySelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKeyRef') }})
    
