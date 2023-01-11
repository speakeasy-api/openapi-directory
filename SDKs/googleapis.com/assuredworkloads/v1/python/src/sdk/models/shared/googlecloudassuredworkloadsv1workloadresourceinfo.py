import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    CONSUMER_PROJECT = "CONSUMER_PROJECT"
    CONSUMER_FOLDER = "CONSUMER_FOLDER"
    ENCRYPTION_KEYS_PROJECT = "ENCRYPTION_KEYS_PROJECT"
    KEYRING = "KEYRING"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1WorkloadResourceInfo:
    r"""GoogleCloudAssuredworkloadsV1WorkloadResourceInfo
    Represent the resources that are children of this Workload.
    """
    
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_type: Optional[GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
