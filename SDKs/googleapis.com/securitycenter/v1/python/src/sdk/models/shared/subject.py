import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubjectKindEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER = "USER"
    SERVICEACCOUNT = "SERVICEACCOUNT"
    GROUP = "GROUP"


@dataclass_json
@dataclasses.dataclass
class Subject:
    r"""Subject
    Represents a Kubernetes Subject.
    """
    
    kind: Optional[SubjectKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ns: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ns') }})
    
