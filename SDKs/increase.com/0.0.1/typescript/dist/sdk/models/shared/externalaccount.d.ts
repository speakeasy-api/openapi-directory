import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the account to which the transfer will be sent.
 */
export declare enum ExternalAccountFundingEnum {
    Checking = "checking",
    Savings = "savings",
    Other = "other"
}
/**
 * The External Account's status.
 */
export declare enum ExternalAccountStatusEnum {
    Active = "active",
    Archived = "archived"
}
/**
 * A constant representing the object's type. For this resource it will always be `external_account`.
 */
export declare enum ExternalAccountTypeEnum {
    ExternalAccount = "external_account"
}
/**
 * If you have verified ownership of the External Account.
 */
export declare enum ExternalAccountVerificationStatusEnum {
    Unverified = "unverified",
    Pending = "pending",
    Verified = "verified"
}
/**
 * External Accounts represent accounts at financial institutions other than Increase. You can use this API to store their details for reuse.
 */
export declare class ExternalAccount extends SpeakeasyBase {
    /**
     * The destination account number.
     */
    accountNumber: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the External Account was created.
     */
    createdAt: Date;
    /**
     * The External Account's description for display purposes.
     */
    description: string;
    /**
     * The type of the account to which the transfer will be sent.
     */
    funding: ExternalAccountFundingEnum;
    /**
     * The External Account's identifier.
     */
    id: string;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN).
     */
    routingNumber: string;
    /**
     * The External Account's status.
     */
    status: ExternalAccountStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `external_account`.
     */
    type: ExternalAccountTypeEnum;
    /**
     * If you have verified ownership of the External Account.
     */
    verificationStatus: ExternalAccountVerificationStatusEnum;
}
