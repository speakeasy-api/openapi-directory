import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DatabaseInstanceStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"
    DELETED = "DELETED"

class DatabaseInstanceTypeEnum(str, Enum):
    DATABASE_INSTANCE_TYPE_UNSPECIFIED = "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
    DEFAULT_DATABASE = "DEFAULT_DATABASE"
    USER_DATABASE = "USER_DATABASE"


@dataclass_json
@dataclasses.dataclass
class DatabaseInstance:
    r"""DatabaseInstance
    Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
    """
    
    database_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseUrl') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    state: Optional[DatabaseInstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[DatabaseInstanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class DatabaseInstanceInput:
    r"""DatabaseInstanceInput
    Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[DatabaseInstanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
