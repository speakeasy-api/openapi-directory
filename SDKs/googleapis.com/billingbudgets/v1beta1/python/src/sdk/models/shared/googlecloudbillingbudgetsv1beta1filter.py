import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbillingbudgetsv1beta1customperiod as shared_googlecloudbillingbudgetsv1beta1customperiod

class GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum(str, Enum):
    CALENDAR_PERIOD_UNSPECIFIED = "CALENDAR_PERIOD_UNSPECIFIED"
    MONTH = "MONTH"
    QUARTER = "QUARTER"
    YEAR = "YEAR"

class GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum(str, Enum):
    CREDIT_TYPES_TREATMENT_UNSPECIFIED = "CREDIT_TYPES_TREATMENT_UNSPECIFIED"
    INCLUDE_ALL_CREDITS = "INCLUDE_ALL_CREDITS"
    EXCLUDE_ALL_CREDITS = "EXCLUDE_ALL_CREDITS"
    INCLUDE_SPECIFIED_CREDITS = "INCLUDE_SPECIFIED_CREDITS"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1Filter:
    r"""GoogleCloudBillingBudgetsV1beta1Filter
    A filter for a budget, limiting the scope of the cost to calculate.
    """
    
    calendar_period: Optional[GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarPeriod') }})
    credit_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditTypes') }})
    credit_types_treatment: Optional[GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditTypesTreatment') }})
    custom_period: Optional[shared_googlecloudbillingbudgetsv1beta1customperiod.GoogleCloudBillingBudgetsV1beta1CustomPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPeriod') }})
    labels: Optional[dict[str, list[Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    projects: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    subaccounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccounts') }})
    
