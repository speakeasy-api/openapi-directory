import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This indicates if payments can be made to the Account Number.
 */
export declare enum AccountNumberStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Canceled = "canceled"
}
/**
 * A constant representing the object's type. For this resource it will always be `account_number`.
 */
export declare enum AccountNumberTypeEnum {
    AccountNumber = "account_number"
}
/**
 * Each account can have multiple account and routing numbers. We recommend that you use a set per vendor. This is similar to how you use different passwords for different websites. Account numbers can also be used to seamlessly reconcile inbound payments. Generating a unique account number per vendor ensures you always know the originator of an incoming payment.
 */
export declare class AccountNumber extends SpeakeasyBase {
    /**
     * The identifier for the account this Account Number belongs to.
     */
    accountId: string;
    /**
     * The account number.
     */
    accountNumber: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account Number was created.
     */
    createdAt: Date;
    /**
     * The Account Number identifier.
     */
    id: string;
    /**
     * The name you choose for the Account Number.
     */
    name: string;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN).
     */
    routingNumber: string;
    /**
     * This indicates if payments can be made to the Account Number.
     */
    status: AccountNumberStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `account_number`.
     */
    type: AccountNumberTypeEnum;
}
