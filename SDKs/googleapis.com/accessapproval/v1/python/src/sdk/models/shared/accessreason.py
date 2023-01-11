import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccessReasonTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CUSTOMER_INITIATED_SUPPORT = "CUSTOMER_INITIATED_SUPPORT"
    GOOGLE_INITIATED_SERVICE = "GOOGLE_INITIATED_SERVICE"
    GOOGLE_INITIATED_REVIEW = "GOOGLE_INITIATED_REVIEW"
    THIRD_PARTY_DATA_REQUEST = "THIRD_PARTY_DATA_REQUEST"
    GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"


@dataclass_json
@dataclasses.dataclass
class AccessReason:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    type: Optional[AccessReasonTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
