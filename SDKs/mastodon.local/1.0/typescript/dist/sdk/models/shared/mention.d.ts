import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a mention of a user within the content of a status.
 *
 * @see {@link https://docs.joinmastodon.org/entities/mention/}
 */
export declare class Mention extends SpeakeasyBase {
    /**
     * The webfinger acct URI of the mentioned user. Equivalent to `username` for local users, or `username@domain` for remote users.
     */
    acct: string;
    /**
     * The account id of the mentioned user. Cast from an integer, but not guaranteed to be a number
     */
    id: string;
    /**
     * The location of the mentioned user's profile.
     */
    url: string;
    /**
     * The username of the mentioned user.
     */
    username: string;
}
