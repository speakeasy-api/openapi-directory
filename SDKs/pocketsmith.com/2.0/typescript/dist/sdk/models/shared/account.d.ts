import { SpeakeasyBase } from "../../../internal/utils";
import { Scenario } from "./scenario";
import { TransactionAccount } from "./transactionaccount";
/**
 * The type of the account.
 */
export declare enum AccountTypeEnum {
    Bank = "bank",
    Credits = "credits",
    Cash = "cash",
    Stocks = "stocks",
    Mortgage = "mortgage",
    Loans = "loans",
    Vehicle = "vehicle",
    Property = "property",
    Insurance = "insurance",
    OtherAsset = "other_asset",
    OtherLiability = "other_liability"
}
/**
 * Success
 */
export declare class Account extends SpeakeasyBase {
    /**
     * When the account was created.
     */
    createdAt?: string;
    /**
     * The currency code for the account.
     */
    currencyCode?: string;
    /**
     * The current balance of the account.
     */
    currentBalance?: number;
    /**
     * The date of the current balance.
     */
    currentBalanceDate?: string;
    /**
     * The exchange rate between the account's currency and the user's base currency, when different. If the currencies are the same, null is returned.
     */
    currentBalanceExchangeRate?: number;
    /**
     * The current balance of the account in the user's base currency.
     */
    currentBalanceInBaseCurrency?: number;
    /**
     * The unique identifier of the account.
     */
    id?: number;
    /**
     * Whether the account is a net worth asset.
     */
    isNetWorth?: boolean;
    primaryScenario?: Scenario;
    primaryTransactionAccount?: TransactionAccount;
    /**
     * The current safe balance, if safe balance is activated on the account. If safe balance is not activated, then null is returned.
     */
    safeBalance?: number;
    /**
     * The current safe balance in the user's base currency, if safe balance is activated on the account. If safe balance is not activated, then null is returned.
     */
    safeBalanceInBaseCurrency?: number;
    /**
     * All scenarios that compose the account, including the primary.
     */
    scenarios?: Scenario[];
    /**
     * The title of the account.
     */
    title?: string;
    /**
     * All transaction accounts that compose the account, including the primary.
     */
    transactionAccounts?: TransactionAccount[];
    /**
     * The type of the account.
     */
    type?: AccountTypeEnum;
    /**
     * When the account was last updated.
     */
    updatedAt?: string;
}
