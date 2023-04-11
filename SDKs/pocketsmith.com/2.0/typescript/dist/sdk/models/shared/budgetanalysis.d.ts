import { SpeakeasyBase } from "../../../internal/utils";
import { Period } from "./period";
export declare class BudgetAnalysis extends SpeakeasyBase {
    /**
     * The average actual (transactions) amount across all periods.
     */
    averageActualAmount?: number;
    /**
     * The average budgeted amount across all periods.
     */
    averageForecastAmount?: number;
    /**
     * The currency of the budget analysis.
     */
    currencyCode?: string;
    /**
     * The end date of the budget analysis.
     */
    endDate?: string;
    /**
     * The period analyses that this budget analysis comprises.
     */
    periods?: Period[];
    /**
     * The start date of the budget analysis.
     */
    startDate?: string;
    /**
     * The total actual (transactions) amount across all periods.
     */
    totalActualAmount?: number;
    /**
     * The total budgeted amount across all periods.
     */
    totalForecastAmount?: number;
    /**
     * The total amount the budget was exceeded across all periods.
     */
    totalOverBy?: number;
    /**
     * The total amount the budget was under by across all periods.
     */
    totalUnderBy?: number;
}
