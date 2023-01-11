import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbillingbudgetsv1budgetamount as shared_googlecloudbillingbudgetsv1budgetamount
from ..shared import googlecloudbillingbudgetsv1filter as shared_googlecloudbillingbudgetsv1filter
from ..shared import googlecloudbillingbudgetsv1notificationsrule as shared_googlecloudbillingbudgetsv1notificationsrule
from ..shared import googlecloudbillingbudgetsv1thresholdrule as shared_googlecloudbillingbudgetsv1thresholdrule


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1Budget:
    r"""GoogleCloudBillingBudgetsV1Budget
    A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
    """
    
    amount: Optional[shared_googlecloudbillingbudgetsv1budgetamount.GoogleCloudBillingBudgetsV1BudgetAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    budget_filter: Optional[shared_googlecloudbillingbudgetsv1filter.GoogleCloudBillingBudgetsV1Filter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetFilter') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications_rule: Optional[shared_googlecloudbillingbudgetsv1notificationsrule.GoogleCloudBillingBudgetsV1NotificationsRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationsRule') }})
    threshold_rules: Optional[list[shared_googlecloudbillingbudgetsv1thresholdrule.GoogleCloudBillingBudgetsV1ThresholdRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdRules') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1BudgetInput:
    r"""GoogleCloudBillingBudgetsV1BudgetInput
    A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
    """
    
    amount: Optional[shared_googlecloudbillingbudgetsv1budgetamount.GoogleCloudBillingBudgetsV1BudgetAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    budget_filter: Optional[shared_googlecloudbillingbudgetsv1filter.GoogleCloudBillingBudgetsV1Filter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetFilter') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    notifications_rule: Optional[shared_googlecloudbillingbudgetsv1notificationsrule.GoogleCloudBillingBudgetsV1NotificationsRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationsRule') }})
    threshold_rules: Optional[list[shared_googlecloudbillingbudgetsv1thresholdrule.GoogleCloudBillingBudgetsV1ThresholdRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdRules') }})
    
