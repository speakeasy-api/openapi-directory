import { SpeakeasyBase } from "../../../internal/utils";
import { Institution } from "./institution";
/**
 * The type of the transaction account.
 */
export declare enum TransactionAccountTypeEnum {
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
export declare class TransactionAccount extends SpeakeasyBase {
    createdAt?: string;
    /**
     * The currency that the account is in. This is determined by the account that the transaction account belongs to.
     */
    currencyCode?: string;
    currentBalance?: number;
    currentBalanceDate?: string;
    /**
     * The exchange rate between the transaction account's currency and the user's base currency, when different. If the currencies are the same, null is returned.
     */
    currentBalanceExchangeRate?: number;
    /**
     * The current balance of the transaction account in the user's base currency.
     */
    currentBalanceInBaseCurrency?: number;
    id?: number;
    institution?: Institution;
    name?: string;
    number?: string;
    /**
     * The current safe balance, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.
     */
    safeBalance?: number;
    /**
     * The current safe balance in the user's base currency, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.
     */
    safeBalanceInBaseCurrency?: number;
    startingBalance?: number;
    startingBalanceDate?: string;
    /**
     * The type of the transaction account.
     */
    type?: TransactionAccountTypeEnum;
    updatedAt?: string;
}
