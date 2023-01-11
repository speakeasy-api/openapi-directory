import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contributiondetails as shared_contributiondetails
from ..shared import coveragedetails as shared_coveragedetails
from ..shared import ratemodel as shared_ratemodel


@dataclass_json
@dataclasses.dataclass
class CoveragePlanResultCobraRules:
    r"""CoveragePlanResultCobraRules
    COBRA rules for the group medical plan
    """
    
    eligible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligible') }})
    

@dataclass_json
@dataclasses.dataclass
class CoveragePlanResult:
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    group_coverage_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_coverage_id') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    plan_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_name') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    benefit_details: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefit_details') }})
    cobra_rules: Optional[CoveragePlanResultCobraRules] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cobra_rules') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    contribution_details: Optional[list[shared_contributiondetails.ContributionDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contribution_details') }})
    coverage_details: Optional[shared_coveragedetails.CoverageDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_details') }})
    existing_plan: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existing_plan') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    plan_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_type') }})
    product_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    rate_details: Optional[list[shared_ratemodel.RateModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_details') }})
    termination_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_policy') }})
    volume_rules: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_rules') }})
    waiting_period_rules: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_period_rules') }})
    
