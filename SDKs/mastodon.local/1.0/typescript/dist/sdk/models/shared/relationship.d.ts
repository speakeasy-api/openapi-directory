import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the relationship between accounts, such as following / blocking / muting / etc.
 *
 * @see {@link https://docs.joinmastodon.org/entities/relationship/}
 */
export declare class Relationship extends SpeakeasyBase {
    /**
     * Is this user blocking you?
     */
    blockedBy: boolean;
    /**
     * Are you blocking this user?
     */
    blocking: boolean;
    /**
     * Are you blocking this user's domain?
     */
    domainBlocking: boolean;
    /**
     * Are you featuring this user on your profile?
     */
    endorsed: boolean;
    /**
     * Are you followed by this user?
     */
    followedBy: boolean;
    /**
     * Are you following this user?
     */
    following: boolean;
    /**
     * The account id. Cast from an integer, but not guaranteed to be a number.
     */
    id: string;
    /**
     * Are you muting this user?
     */
    muting: boolean;
    /**
     * Are you muting notifications from this user?
     */
    mutingNotifications: boolean;
    /**
     * This user's profile bio
     */
    note: string;
    /**
     * Have you enabled notifications for this user?
     */
    notifying: boolean;
    /**
     * Do you have a pending follow request for this user?
     */
    requested: boolean;
    /**
     * Are you receiving this user's boosts in your home timeline?
     */
    showingReblogs: boolean;
}
