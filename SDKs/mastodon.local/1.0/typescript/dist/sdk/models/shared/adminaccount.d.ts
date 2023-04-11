import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Admin-level information about a given account.
 *
 * @see {@link https://docs.joinmastodon.org/entities/admin-account/}
 */
export declare class AdminAccount extends SpeakeasyBase {
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    account?: Account;
    /**
     * Whether the account is currently approved.
     */
    approved?: boolean;
    /**
     * Whether the account has confirmed their email address.
     */
    confirmed?: boolean;
    /**
     * When the account was first discovered.
     */
    createdAt?: Date;
    /**
     * The ID of the application that created this account. Cast from an integer, but not guaranteed to be a number.
     */
    createdByApplicationId?: string;
    /**
     * Whether the account is currently disabled.
     */
    disabled?: boolean;
    /**
     * The email address associated with the account.
     */
    email?: string;
    /**
     * The ID of the account in the database. Cast from an integer, but not guaranteed to be a number.
     */
    id?: string;
    /**
     * Invite request text ???
     */
    inviteRequest?: string;
    /**
     * The ID of the account that invited this user. Cast from an integer, but not guaranteed to be a number.
     */
    invitedByAccountId?: string;
    /**
     * The IP address last used to login to this account.
     */
    ip?: string;
    /**
     * The locale of the account. ISO 639 Part 1 two-letter language code.
     */
    locale?: string;
    /**
     * The current role of the account. Enumerable oneOf.
     */
    role?: string;
    /**
     * Whether the account is currently silenced.
     */
    silenced?: boolean;
    /**
     * Whether the account is currently suspended.
     */
    suspended?: boolean;
    /**
     * The username of the account.
     */
    username?: string;
}
