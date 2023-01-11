import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GCP_PROJECT = "GCP_PROJECT"
    GCP_RESOURCE = "GCP_RESOURCE"
    GCP_SECRETMANAGER_SECRET = "GCP_SECRETMANAGER_SECRET"
    GCP_SECRETMANAGER_SECRET_VERSION = "GCP_SECRETMANAGER_SECRET_VERSION"


@dataclass_json
@dataclasses.dataclass
class Resource:
    r"""Resource
    Resource definition
    """
    
    path_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathTemplate') }})
    type: Optional[ResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
