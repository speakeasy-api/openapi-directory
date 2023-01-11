import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudresourcesettingsv1valueenumvalue as shared_googlecloudresourcesettingsv1valueenumvalue
from ..shared import googlecloudresourcesettingsv1valuestringmap as shared_googlecloudresourcesettingsv1valuestringmap
from ..shared import googlecloudresourcesettingsv1valuestringset as shared_googlecloudresourcesettingsv1valuestringset


@dataclass_json
@dataclasses.dataclass
class GoogleCloudResourcesettingsV1Value:
    r"""GoogleCloudResourcesettingsV1Value
    The data in a setting value.
    """
    
    boolean_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    duration_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationValue') }})
    enum_value: Optional[shared_googlecloudresourcesettingsv1valueenumvalue.GoogleCloudResourcesettingsV1ValueEnumValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValue') }})
    string_map_value: Optional[shared_googlecloudresourcesettingsv1valuestringmap.GoogleCloudResourcesettingsV1ValueStringMap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringMapValue') }})
    string_set_value: Optional[shared_googlecloudresourcesettingsv1valuestringset.GoogleCloudResourcesettingsV1ValueStringSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringSetValue') }})
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
