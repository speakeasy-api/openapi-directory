import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the scenario.
 */
export declare enum ScenarioTypeEnum {
    NoInterest = "no-interest",
    Savings = "savings",
    Debt = "debt"
}
export declare class Scenario extends SpeakeasyBase {
    /**
     * For goals, the date that they should be achieved by.
     */
    achieveDate?: string;
    /**
     * The closing balance of the scenario.
     */
    closingBalance?: number;
    /**
     * The date of the closing balance.
     */
    closingBalanceDate?: string;
    /**
     * When the scenario was created.
     */
    createdAt?: string;
    /**
     * The current balance of the scenario.
     */
    currentBalance?: number;
    /**
     * The date of the current balance.
     */
    currentBalanceDate?: string;
    /**
     * The exchange rate between the scenario's currency and the user's base currency, when different. If the currencies are the same, null is returned.
     */
    currentBalanceExchangeRate?: number;
    /**
     * The current balance of the scenario in the user's base currency.
     */
    currentBalanceInBaseCurrency?: number;
    /**
     * A short description of what the scenario is modelling.
     */
    description?: string;
    /**
     * The unique identifier of the scenario.
     */
    id?: number;
    /**
     * The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to.
     */
    interestRate?: number;
    /**
     * A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly.
     */
    interestRateRepeatId?: number;
    maximumValue?: number;
    minimumValue?: number;
    /**
     * The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned.
     */
    safeBalance?: number;
    /**
     * The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned.
     */
    safeBalanceInBaseCurrency?: number;
    /**
     * The starting balance of the scenario.
     */
    startingBalance?: number;
    /**
     * The date of the starting balance.
     */
    startingBalanceDate?: string;
    /**
     * The title of the scenario.
     */
    title?: string;
    /**
     * The type of the scenario.
     */
    type?: ScenarioTypeEnum;
    /**
     * When the scenario was last updated.
     */
    updatedAt?: string;
}
