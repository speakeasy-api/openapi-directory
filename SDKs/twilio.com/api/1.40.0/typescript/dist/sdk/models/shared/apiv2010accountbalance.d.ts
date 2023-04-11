import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ApiV2010AccountBalance extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The balance of the Account, in units specified by the unit parameter. Balance changes may not be reflected immediately. Child accounts do not contain balance information
     */
    balance?: string;
    /**
     * The units of currency for the account balance
     */
    currency?: string;
}
