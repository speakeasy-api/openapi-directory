import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterange as shared_daterange
from ..shared import prismaconfig as shared_prismaconfig

class CampaignBudgetBudgetUnitEnum(str, Enum):
    BUDGET_UNIT_UNSPECIFIED = "BUDGET_UNIT_UNSPECIFIED"
    BUDGET_UNIT_CURRENCY = "BUDGET_UNIT_CURRENCY"
    BUDGET_UNIT_IMPRESSIONS = "BUDGET_UNIT_IMPRESSIONS"

class CampaignBudgetExternalBudgetSourceEnum(str, Enum):
    EXTERNAL_BUDGET_SOURCE_UNSPECIFIED = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED"
    EXTERNAL_BUDGET_SOURCE_NONE = "EXTERNAL_BUDGET_SOURCE_NONE"
    EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN"


@dataclass_json
@dataclasses.dataclass
class CampaignBudget:
    r"""CampaignBudget
    Settings that control how the campaign budget is allocated.
    """
    
    budget_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetAmountMicros') }})
    budget_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetId') }})
    budget_unit: Optional[CampaignBudgetBudgetUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetUnit') }})
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_budget_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalBudgetId') }})
    external_budget_source: Optional[CampaignBudgetExternalBudgetSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalBudgetSource') }})
    invoice_grouping_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceGroupingId') }})
    prisma_config: Optional[shared_prismaconfig.PrismaConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaConfig') }})
    
