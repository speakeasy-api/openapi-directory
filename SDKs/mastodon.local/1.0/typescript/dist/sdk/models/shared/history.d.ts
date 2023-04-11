import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents daily usage history of a hashtag.
 *
 * @see {@link https://docs.joinmastodon.org/entities/history/}
 */
export declare class History extends SpeakeasyBase {
    /**
     * the total of accounts using the tag within that day. Cast from an integer.
     */
    accounts: string;
    /**
     * UNIX timestamp on midnight of the given day.
     */
    day: string;
    /**
     * the counted usage of the tag within that day. Cast from an integer.
     */
    uses: string;
}
