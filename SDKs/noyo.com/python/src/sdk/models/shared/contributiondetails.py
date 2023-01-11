import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ContributionDetailsContributionRuleTypeEnum(str, Enum):
    FIXED_DOLLAR = "fixed_dollar"
    PERCENT = "percent"

class ContributionDetailsContributionSourceEnum(str, Enum):
    EMPLOYEE_AMOUNT = "employee_amount"
    EMPLOYER_AMOUNT = "employer_amount"

class ContributionDetailsContributionTargetEnum(str, Enum):
    DEPENDENTS = "dependents"
    EMPLOYEE = "employee"


@dataclass_json
@dataclasses.dataclass
class ContributionDetails:
    contribution_rule: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contribution_rule') }})
    contribution_rule_type: ContributionDetailsContributionRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contribution_rule_type') }})
    contribution_source: ContributionDetailsContributionSourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contribution_source') }})
    contribution_target: ContributionDetailsContributionTargetEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contribution_target') }})
    
