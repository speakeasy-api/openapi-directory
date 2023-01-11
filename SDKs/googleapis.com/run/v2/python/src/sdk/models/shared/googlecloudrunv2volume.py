import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2cloudsqlinstance as shared_googlecloudrunv2cloudsqlinstance
from ..shared import googlecloudrunv2secretvolumesource as shared_googlecloudrunv2secretvolumesource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2Volume:
    r"""GoogleCloudRunV2Volume
    Volume represents a named volume in a container.
    """
    
    cloud_sql_instance: Optional[shared_googlecloudrunv2cloudsqlinstance.GoogleCloudRunV2CloudSQLInstance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlInstance') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secret: Optional[shared_googlecloudrunv2secretvolumesource.GoogleCloudRunV2SecretVolumeSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
