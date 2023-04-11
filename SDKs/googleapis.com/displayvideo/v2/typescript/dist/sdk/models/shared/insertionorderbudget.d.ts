import { SpeakeasyBase } from "../../../internal/utils";
import { InsertionOrderBudgetSegment } from "./insertionorderbudgetsegment";
/**
 * The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to `INSERTION_ORDER_AUTOMATION_TYPE_NONE`.
 */
export declare enum InsertionOrderBudgetAutomationTypeEnum {
    InsertionOrderAutomationTypeUnspecified = "INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED",
    InsertionOrderAutomationTypeBudget = "INSERTION_ORDER_AUTOMATION_TYPE_BUDGET",
    InsertionOrderAutomationTypeNone = "INSERTION_ORDER_AUTOMATION_TYPE_NONE",
    InsertionOrderAutomationTypeBidBudget = "INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET"
}
/**
 * Required. Immutable. The budget unit specifies whether the budget is currency based or impression based.
 */
export declare enum InsertionOrderBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}
/**
 * Settings that control how insertion order budget is allocated.
 */
export declare class InsertionOrderBudget extends SpeakeasyBase {
    /**
     * The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to `INSERTION_ORDER_AUTOMATION_TYPE_NONE`.
     */
    automationType?: InsertionOrderBudgetAutomationTypeEnum;
    /**
     * Required. The list of budget segments. Use a budget segment to specify a specific budget for a given period of time an insertion order is running.
     */
    budgetSegments?: InsertionOrderBudgetSegment[];
    /**
     * Required. Immutable. The budget unit specifies whether the budget is currency based or impression based.
     */
    budgetUnit?: InsertionOrderBudgetBudgetUnitEnum;
}
