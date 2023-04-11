import { SpeakeasyBase } from "../../../internal/utils";
import { PrismaCpeCode } from "./prismacpecode";
/**
 * Summarized information of an individual campaign budget.
 */
export declare class BudgetSummary extends SpeakeasyBase {
    /**
     * Corresponds to the external_budget_id of a campaign budget. If the value is not set in the campaign budget, this field will be empty.
     */
    externalBudgetId?: string;
    /**
     * The sum of charges made under this budget before taxes, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.
     */
    preTaxAmountMicros?: string;
    /**
     * Google Payments Center supports searching and filtering on the component fields of this code.
     */
    prismaCpeCode?: PrismaCpeCode;
    /**
     * The amount of tax applied to charges under this budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.
     */
    taxAmountMicros?: string;
    /**
     * The total sum of charges made under this budget, including tax, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.
     */
    totalAmountMicros?: string;
}
