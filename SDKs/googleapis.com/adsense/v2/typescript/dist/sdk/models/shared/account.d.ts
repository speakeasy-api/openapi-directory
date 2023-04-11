import { SpeakeasyBase } from "../../../internal/utils";
import { TimeZone } from "./timezone";
/**
 * Output only. State of the account.
 */
export declare enum AccountStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    NeedsAttention = "NEEDS_ATTENTION",
    Closed = "CLOSED"
}
/**
 * Representation of an account.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Output only. Creation time of the account.
     */
    createTime?: string;
    /**
     * Output only. Display name of this account.
     */
    displayName?: string;
    /**
     * Output only. Resource name of the account. Format: accounts/pub-[0-9]+
     */
    name?: string;
    /**
     * Output only. Outstanding tasks that need to be completed as part of the sign-up process for a new account. e.g. "billing-profile-creation", "phone-pin-verification".
     */
    pendingTasks?: string[];
    /**
     * Output only. Whether this account is premium.
     */
    premium?: boolean;
    /**
     * Output only. State of the account.
     */
    state?: AccountStateEnum;
    /**
     * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
     */
    timeZone?: TimeZone;
}
