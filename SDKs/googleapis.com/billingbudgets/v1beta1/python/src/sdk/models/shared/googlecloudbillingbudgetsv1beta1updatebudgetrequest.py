import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbillingbudgetsv1beta1budget as shared_googlecloudbillingbudgetsv1beta1budget


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput:
    r"""GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput
    Request for UpdateBudget
    """
    
    budget: Optional[shared_googlecloudbillingbudgetsv1beta1budget.GoogleCloudBillingBudgetsV1beta1BudgetInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
