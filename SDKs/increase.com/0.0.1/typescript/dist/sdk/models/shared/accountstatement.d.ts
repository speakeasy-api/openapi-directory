import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A constant representing the object's type. For this resource it will always be `account_statement`.
 */
export declare enum AccountStatementTypeEnum {
    AccountStatement = "account_statement"
}
/**
 * Account Statements are generated monthly for every active Account. You can access the statement's data via the API or retrieve a PDF with its details via its associated File.
 */
export declare class AccountStatement extends SpeakeasyBase {
    /**
     * The identifier for the Account this Account Statement belongs to.
     */
    accountId: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account Statement was created.
     */
    createdAt: Date;
    /**
     * The Account's balance at the start of its statement period.
     */
    endingBalance: number;
    /**
     * The identifier of the File containing a PDF of the statement.
     */
    fileId: string;
    /**
     * The Account Statement identifier.
     */
    id: string;
    /**
     * The Account's balance at the start of its statement period.
     */
    startingBalance: number;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the end of the period the Account Statement covers.
     */
    statementPeriodEnd: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the start of the period the Account Statement covers.
     */
    statementPeriodStart: Date;
    /**
     * A constant representing the object's type. For this resource it will always be `account_statement`.
     */
    type: AccountStatementTypeEnum;
}
