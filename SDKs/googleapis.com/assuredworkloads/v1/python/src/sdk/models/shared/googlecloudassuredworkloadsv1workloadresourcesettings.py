import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    CONSUMER_PROJECT = "CONSUMER_PROJECT"
    CONSUMER_FOLDER = "CONSUMER_FOLDER"
    ENCRYPTION_KEYS_PROJECT = "ENCRYPTION_KEYS_PROJECT"
    KEYRING = "KEYRING"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1WorkloadResourceSettings:
    r"""GoogleCloudAssuredworkloadsV1WorkloadResourceSettings
    Represent the custom settings for the resources to be created.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_type: Optional[GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
