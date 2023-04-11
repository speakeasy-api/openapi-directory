import { SpeakeasyBase } from "../../../internal/utils";
import { AccountQuota } from "./accountquota";
import { ApiKeys } from "./apikeys";
/**
 * Represents a user account
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Gets the email associated with this account
     */
    email?: string;
    keys?: ApiKeys;
    /**
     * Represents a set of quotas associated with an account
     */
    quotas?: AccountQuota;
    /**
     * Gets the name of the account owner
     */
    userName?: string;
}
