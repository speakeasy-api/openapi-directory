import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationrefreshstatus_enum as shared_verificationrefreshstatus_enum


@dataclass_json
@dataclasses.dataclass
class IncomeVerificationRefreshResponse:
    r"""IncomeVerificationRefreshResponse
    IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
    """
    
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    verification_refresh_status: shared_verificationrefreshstatus_enum.VerificationRefreshStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_refresh_status') }})
    
