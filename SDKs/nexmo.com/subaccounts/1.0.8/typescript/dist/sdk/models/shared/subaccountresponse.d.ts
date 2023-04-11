import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Subaccount response
 */
export declare class SubaccountResponse extends SpeakeasyBase {
    /**
     * Unique subaccount ID.
     */
    apiKey?: string;
    /**
     * Balance of the subAccount. Value is null if balance is shared with primary account.
     */
    balance?: number;
    /**
     * Subaccount creation date and time.
     */
    createdAt?: string;
    /**
     * Credit limit of the subAccount. Value is null if balance is shared with primary account.
     */
    creditLimit?: number;
    /**
     * Name of the subaccount.
     */
    name?: string;
    /**
     * Unique primary account ID.
     */
    primaryAccountApiKey?: string;
    /**
     * Subaccount suspension status.
     */
    suspended?: boolean;
    /**
     * Flag showing if balance is shared with primary account.
     */
    usePrimaryAccountBalance?: boolean;
}
