import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Account's balances in the minor unit of its currency. For dollars, for example, these values will represent cents.
 */
export declare class AccountBalances extends SpeakeasyBase {
    /**
     * The Account's available balance, representing the current balance less any open Pending Transactions on the Account.
     */
    availableBalance: number;
    /**
     * The Account's current balance, representing the sum of all posted Transactions on the Account.
     */
    currentBalance: number;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Account currency.
 */
export declare enum AccountCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The status of the Account.
 */
export declare enum AccountStatusEnum {
    Open = "open",
    Closed = "closed"
}
/**
 * A constant representing the object's type. For this resource it will always be `account`.
 */
export declare enum AccountTypeEnum {
    Account = "account"
}
/**
 * Accounts are your bank accounts with Increase. They store money, receive transfers, and send payments. They earn interest and have depository insurance.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * The Account's balances in the minor unit of its currency. For dollars, for example, these values will represent cents.
     */
    balances: AccountBalances;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account was created.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Account currency.
     */
    currency: AccountCurrencyEnum;
    /**
     * The identifier for the Entity the Account belongs to.
     */
    entityId: string;
    /**
     * The Account identifier.
     */
    id: string;
    /**
     * The identifier of an Entity that, while not owning the Account, is associated with its activity.
     */
    informationalEntityId: string;
    /**
     * The interest accrued but not yet paid, expressed as a string containing a floating-point value.
     */
    interestAccrued: string;
    /**
     * The latest [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which interest was accrued.
     */
    interestAccruedAt: Date;
    /**
     * The name you choose for the Account.
     */
    name: string;
    /**
     * The status of the Account.
     */
    status: AccountStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `account`.
     */
    type: AccountTypeEnum;
}
