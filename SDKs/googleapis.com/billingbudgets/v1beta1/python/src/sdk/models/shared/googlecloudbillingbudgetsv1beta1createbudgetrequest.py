import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbillingbudgetsv1beta1budget as shared_googlecloudbillingbudgetsv1beta1budget


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput:
    r"""GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput
    Request for CreateBudget
    """
    
    budget: Optional[shared_googlecloudbillingbudgetsv1beta1budget.GoogleCloudBillingBudgetsV1beta1BudgetInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    
