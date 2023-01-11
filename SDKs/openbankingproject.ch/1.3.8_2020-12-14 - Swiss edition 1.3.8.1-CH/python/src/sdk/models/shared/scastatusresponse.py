import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scastatus_enum as shared_scastatus_enum


@dataclass_json
@dataclasses.dataclass
class ScaStatusResponse:
    r"""ScaStatusResponse
    Body of the JSON response with SCA Status.
    """
    
    sca_status: shared_scastatus_enum.ScaStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaStatus') }})
    psu_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    trusted_beneficiary_flag: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustedBeneficiaryFlag') }})
    
