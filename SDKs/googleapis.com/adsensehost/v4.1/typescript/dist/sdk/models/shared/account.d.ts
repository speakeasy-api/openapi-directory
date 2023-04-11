import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Unique identifier of this account.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsensehost#account.
     */
    kind?: string;
    /**
     * Name of this account.
     */
    name?: string;
    /**
     * Approval status of this account. One of: PENDING, APPROVED, DISABLED.
     */
    status?: string;
}
