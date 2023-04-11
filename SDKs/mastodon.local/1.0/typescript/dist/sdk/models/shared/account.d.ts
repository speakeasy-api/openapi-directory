import { SpeakeasyBase } from "../../../internal/utils";
import { Emoji } from "./emoji";
import { Field } from "./field";
import { Source } from "./source";
/**
 * Represents a user of Mastodon and their associated profile.
 *
 * @see {@link https://docs.joinmastodon.org/entities/account/}
 */
export declare class Account extends SpeakeasyBase {
    /**
     * The Webfinger account URI. Equal to `username` for local users, or `username@domain` for
     */
    acct?: string;
    /**
     * An image icon that is shown next to statuses and in the profile. The format is URL.
     */
    avatar?: string;
    /**
     * A static version of the avatar. Equal to `avatar` if its value is a static image; different if `avatar` is an animated GIF. The format is URL.
     */
    avatarStatic?: string;
    /**
     * A presentational flag. Indicates that the account may perform automated actions, may not be monitored, or identifies as a robot.
     */
    bot?: boolean;
    /**
     * When the account was created.
     */
    createdAt?: Date;
    /**
     * Whether the account has opted into discovery features such as the profile directory.
     */
    discoverable?: boolean;
    /**
     * The profile's display name.
     */
    displayName?: string;
    /**
     * Custom emoji entities to be used when rendering the profile. If none, an empty array will be returned.
     */
    emojis?: Emoji[];
    /**
     * Additional metadata attached to a profile as name-value pairs.
     */
    fields?: Field[];
    /**
     * The reported followers of this profile.
     */
    followersCount?: number;
    /**
     * The reported follows of this profile.
     */
    followingCount?: number;
    /**
     * An image banner that is shown above the profile and in profile cards. The format is URL.
     */
    header?: string;
    /**
     * A static version of the header. Equal to `header` if its value is a static image; different if `header` is an animated GIF. The format is URL.
     */
    headerStatic?: string;
    /**
     * The account id `header`.
     */
    id?: string;
    /**
     * When the most recent status was posted.
     */
    lastStatusAt?: Date;
    /**
     * Whether the account manually approves follow requests.
     */
    locked?: boolean;
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    moved?: Account;
    /**
     * When a timed mute will expire, if applicable. ISO 8601 Datetime.
     */
    muteExpiresAt?: Date;
    /**
     * The profile's bio / description.
     */
    note?: string;
    /**
     * Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account.
     */
    source?: Source;
    /**
     * How many statuses are attached to this account.
     */
    statusesCount?: number;
    /**
     * An extra entity returned when an account is suspended.
     */
    suspended?: boolean;
    /**
     * The location of the user's profile page. (HTTPS URL)
     */
    url?: string;
    /**
     * The username of the account, not including domain.
     */
    username?: string;
}
