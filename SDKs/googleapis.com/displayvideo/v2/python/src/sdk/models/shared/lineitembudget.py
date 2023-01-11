import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LineItemBudgetBudgetAllocationTypeEnum(str, Enum):
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED"
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC"
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED"
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED"

class LineItemBudgetBudgetUnitEnum(str, Enum):
    BUDGET_UNIT_UNSPECIFIED = "BUDGET_UNIT_UNSPECIFIED"
    BUDGET_UNIT_CURRENCY = "BUDGET_UNIT_CURRENCY"
    BUDGET_UNIT_IMPRESSIONS = "BUDGET_UNIT_IMPRESSIONS"


@dataclass_json
@dataclasses.dataclass
class LineItemBudget:
    r"""LineItemBudget
    Settings that control how budget is allocated.
    """
    
    budget_allocation_type: Optional[LineItemBudgetBudgetAllocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetAllocationType') }})
    budget_unit: Optional[LineItemBudgetBudgetUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetUnit') }})
    max_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAmount') }})
    

@dataclass_json
@dataclasses.dataclass
class LineItemBudgetInput:
    r"""LineItemBudgetInput
    Settings that control how budget is allocated.
    """
    
    budget_allocation_type: Optional[LineItemBudgetBudgetAllocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetAllocationType') }})
    max_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAmount') }})
    
