import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClientForbiddenProblemReasonEnum(str, Enum):
    OFFICIAL_CLIENT_FORBIDDEN = "official-client-forbidden"
    CLIENT_NOT_ENROLLED = "client-not-enrolled"


@dataclass_json
@dataclasses.dataclass
class ClientForbiddenProblem:
    r"""ClientForbiddenProblem
    A problem that indicates your client is forbidden from making this request.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    reason: Optional[ClientForbiddenProblemReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    registration_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_url') }})
    
