import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a hashtag that is featured on a profile.
 *
 * @see {@link https://docs.joinmastodon.org/entities/featuredtag/}
 */
export declare class FeaturedTag extends SpeakeasyBase {
    /**
     * The internal ID of the featured tag in the database. Cast from integer but not guaranteed to be a number
     */
    id?: string;
    /**
     * The timestamp of the last authored status containing this hashtag. ISO 8601 Datetime.
     */
    lastStatusAt?: Date;
    /**
     * The name of the hashtag being featured.
     */
    name?: string;
    /**
     * The number of authored statuses containing this hashtag.
     */
    statusesCount?: number;
    /**
     * A link to all statuses by a user that contain this hashtag.
     */
    url?: string;
}
