import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbillingbudgetsv1beta1budget as shared_googlecloudbillingbudgetsv1beta1budget


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse:
    r"""GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
    Response for ListBudgets
    """
    
    budgets: Optional[list[shared_googlecloudbillingbudgetsv1beta1budget.GoogleCloudBillingBudgetsV1beta1Budget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
