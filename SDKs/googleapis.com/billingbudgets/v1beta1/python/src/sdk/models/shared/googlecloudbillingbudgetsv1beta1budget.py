import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbillingbudgetsv1beta1allupdatesrule as shared_googlecloudbillingbudgetsv1beta1allupdatesrule
from ..shared import googlecloudbillingbudgetsv1beta1budgetamount as shared_googlecloudbillingbudgetsv1beta1budgetamount
from ..shared import googlecloudbillingbudgetsv1beta1filter as shared_googlecloudbillingbudgetsv1beta1filter
from ..shared import googlecloudbillingbudgetsv1beta1thresholdrule as shared_googlecloudbillingbudgetsv1beta1thresholdrule


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1Budget:
    r"""GoogleCloudBillingBudgetsV1beta1Budget
    A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
    """
    
    all_updates_rule: Optional[shared_googlecloudbillingbudgetsv1beta1allupdatesrule.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allUpdatesRule') }})
    amount: Optional[shared_googlecloudbillingbudgetsv1beta1budgetamount.GoogleCloudBillingBudgetsV1beta1BudgetAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    budget_filter: Optional[shared_googlecloudbillingbudgetsv1beta1filter.GoogleCloudBillingBudgetsV1beta1Filter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetFilter') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    threshold_rules: Optional[list[shared_googlecloudbillingbudgetsv1beta1thresholdrule.GoogleCloudBillingBudgetsV1beta1ThresholdRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdRules') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1BudgetInput:
    r"""GoogleCloudBillingBudgetsV1beta1BudgetInput
    A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
    """
    
    all_updates_rule: Optional[shared_googlecloudbillingbudgetsv1beta1allupdatesrule.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allUpdatesRule') }})
    amount: Optional[shared_googlecloudbillingbudgetsv1beta1budgetamount.GoogleCloudBillingBudgetsV1beta1BudgetAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    budget_filter: Optional[shared_googlecloudbillingbudgetsv1beta1filter.GoogleCloudBillingBudgetsV1beta1Filter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetFilter') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    threshold_rules: Optional[list[shared_googlecloudbillingbudgetsv1beta1thresholdrule.GoogleCloudBillingBudgetsV1beta1ThresholdRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdRules') }})
    
