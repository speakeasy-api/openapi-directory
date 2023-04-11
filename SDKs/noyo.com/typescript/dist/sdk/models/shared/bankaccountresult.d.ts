import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The bank account status
 */
export declare enum BankAccountResultStatusEnum {
    Created = "created",
    Wiped = "wiped"
}
/**
 * Successful Response - Returns a single Bank Account
 */
export declare class BankAccountResult extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * Unique identifier of the associated application in Noyo
     */
    applicationId: string;
    /**
     * Name of the bank
     */
    bankName: string;
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * Whether the account is a checking account
     */
    isChecking: boolean;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * Routing number
     */
    routingNumber: string;
    /**
     * The bank account status
     */
    status: BankAccountResultStatusEnum;
    /**
     * Current version of the record
     */
    version: string;
}
