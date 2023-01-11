import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudresourcesettingsv1value as shared_googlecloudresourcesettingsv1value
from ..shared import googlecloudresourcesettingsv1settingmetadata as shared_googlecloudresourcesettingsv1settingmetadata


@dataclass_json
@dataclasses.dataclass
class GoogleCloudResourcesettingsV1Setting:
    r"""GoogleCloudResourcesettingsV1Setting
    The schema for settings.
    """
    
    effective_value: Optional[shared_googlecloudresourcesettingsv1value.GoogleCloudResourcesettingsV1Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveValue') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    local_value: Optional[shared_googlecloudresourcesettingsv1value.GoogleCloudResourcesettingsV1Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localValue') }})
    metadata: Optional[shared_googlecloudresourcesettingsv1settingmetadata.GoogleCloudResourcesettingsV1SettingMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
