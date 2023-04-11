import { SpeakeasyBase } from "../../../internal/utils";
import { Emoji } from "./emoji";
/**
 * Represents a poll attached to a status.
 *
 * @see {@link https://docs.joinmastodon.org/entities/poll/}
 */
export declare class Poll extends SpeakeasyBase {
    /**
     * Custom emoji to be used for rendering poll options.
     */
    emojis?: Emoji[];
    /**
     * Is the poll currently expired?
     */
    expired?: boolean;
    /**
     * When the poll ends. ISO 8601 Datetime, or null if the poll does not end.
     */
    expiresAt?: Date;
    /**
     * The ID of the poll in the database. Cast from an integer, but not guaranteed to be a number.
     */
    id?: string;
    /**
     * Does the poll allow multiple-choice answers?
     */
    multiple?: boolean;
    /**
     * Possible answers for the poll.
     */
    options?: any[];
    /**
     * When called with a user token, which options has the authorized user chosen? Contains an array of index values for `options`. Array of Number, or null if no current user
     */
    ownVotes?: number[];
    /**
     * When called with a user token, has the authorized user voted? Boolean, or null if no current user
     */
    voted?: boolean;
    /**
     * How many unique accounts have voted on a multiple-choice poll. Number, or null if `multiple` is false.
     */
    votersCount?: number;
    /**
     * How many votes have been received.
     */
    votesCount?: number;
}
