import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status

class CapacityCommitmentPlanEnum(str, Enum):
    COMMITMENT_PLAN_UNSPECIFIED = "COMMITMENT_PLAN_UNSPECIFIED"
    FLEX = "FLEX"
    TRIAL = "TRIAL"
    MONTHLY = "MONTHLY"
    ANNUAL = "ANNUAL"

class CapacityCommitmentRenewalPlanEnum(str, Enum):
    COMMITMENT_PLAN_UNSPECIFIED = "COMMITMENT_PLAN_UNSPECIFIED"
    FLEX = "FLEX"
    TRIAL = "TRIAL"
    MONTHLY = "MONTHLY"
    ANNUAL = "ANNUAL"

class CapacityCommitmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class CapacityCommitment:
    r"""CapacityCommitment
    Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
    """
    
    commitment_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentEndTime') }})
    commitment_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentStartTime') }})
    failure_status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureStatus') }})
    multi_region_auxiliary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiRegionAuxiliary') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    plan: Optional[CapacityCommitmentPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    renewal_plan: Optional[CapacityCommitmentRenewalPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalPlan') }})
    slot_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotCount') }})
    state: Optional[CapacityCommitmentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class CapacityCommitmentInput:
    r"""CapacityCommitmentInput
    Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
    """
    
    failure_status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureStatus') }})
    multi_region_auxiliary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiRegionAuxiliary') }})
    plan: Optional[CapacityCommitmentPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    renewal_plan: Optional[CapacityCommitmentRenewalPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalPlan') }})
    slot_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotCount') }})
    
