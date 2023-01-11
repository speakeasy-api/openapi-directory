import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudresourcesettingsv1value as shared_googlecloudresourcesettingsv1value

class GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    BOOLEAN = "BOOLEAN"
    STRING = "STRING"
    STRING_SET = "STRING_SET"
    ENUM_VALUE = "ENUM_VALUE"
    DURATION_VALUE = "DURATION_VALUE"
    STRING_MAP = "STRING_MAP"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudResourcesettingsV1SettingMetadata:
    r"""GoogleCloudResourcesettingsV1SettingMetadata
    Metadata about a setting which is not editable by the end user.
    """
    
    data_type: Optional[GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    default_value: Optional[shared_googlecloudresourcesettingsv1value.GoogleCloudResourcesettingsV1Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    read_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    
