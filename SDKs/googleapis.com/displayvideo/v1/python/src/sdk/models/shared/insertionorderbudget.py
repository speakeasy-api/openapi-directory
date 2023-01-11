import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insertionorderbudgetsegment as shared_insertionorderbudgetsegment

class InsertionOrderBudgetAutomationTypeEnum(str, Enum):
    INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED = "INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED"
    INSERTION_ORDER_AUTOMATION_TYPE_BUDGET = "INSERTION_ORDER_AUTOMATION_TYPE_BUDGET"
    INSERTION_ORDER_AUTOMATION_TYPE_NONE = "INSERTION_ORDER_AUTOMATION_TYPE_NONE"
    INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET = "INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET"

class InsertionOrderBudgetBudgetUnitEnum(str, Enum):
    BUDGET_UNIT_UNSPECIFIED = "BUDGET_UNIT_UNSPECIFIED"
    BUDGET_UNIT_CURRENCY = "BUDGET_UNIT_CURRENCY"
    BUDGET_UNIT_IMPRESSIONS = "BUDGET_UNIT_IMPRESSIONS"


@dataclass_json
@dataclasses.dataclass
class InsertionOrderBudget:
    r"""InsertionOrderBudget
    Settings that control how insertion order budget is allocated.
    """
    
    automation_type: Optional[InsertionOrderBudgetAutomationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automationType') }})
    budget_segments: Optional[list[shared_insertionorderbudgetsegment.InsertionOrderBudgetSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetSegments') }})
    budget_unit: Optional[InsertionOrderBudgetBudgetUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetUnit') }})
    
