import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetAnalysis } from "./budgetanalysis";
import { Category } from "./category";
export declare class BudgetAnalysisPackage extends SpeakeasyBase {
    category?: Category;
    expense?: BudgetAnalysis;
    income?: BudgetAnalysis;
    /**
     * Whether the expense budget analysis looks like a transfer to the income budget analysis, based on a number of heuristics.
     */
    isTransfer?: boolean;
}
