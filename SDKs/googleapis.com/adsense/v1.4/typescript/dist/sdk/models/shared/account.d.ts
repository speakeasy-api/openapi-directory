import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Account extends SpeakeasyBase {
    creationTime?: string;
    /**
     * Unique identifier of this account.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#account.
     */
    kind?: string;
    /**
     * Name of this account.
     */
    name?: string;
    /**
     * Whether this account is premium.
     */
    premium?: boolean;
    /**
     * Sub accounts of the this account.
     */
    subAccounts?: Account[];
    /**
     * AdSense timezone of this account.
     */
    timezone?: string;
}
