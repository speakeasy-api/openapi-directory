import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2versiontopath as shared_googlecloudrunv2versiontopath


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2SecretVolumeSource:
    r"""GoogleCloudRunV2SecretVolumeSource
    The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
    """
    
    default_mode: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMode') }})
    items: Optional[list[shared_googlecloudrunv2versiontopath.GoogleCloudRunV2VersionToPath]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
