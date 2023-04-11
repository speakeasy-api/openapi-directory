import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FilterContextEnum {
    Home = "home",
    Notifications = "notifications",
    Public = "public",
    Thread = "thread"
}
/**
 * Represents a user-defined filter for determining which statuses should not be shown to the user.
 *
 * @see {@link https://docs.joinmastodon.org/entities/filter/}
 */
export declare class Filter extends SpeakeasyBase {
    /**
     * The contexts in which the filter should be applied.
     */
    context?: FilterContextEnum[];
    /**
     * When the filter should no longer be applied. ISO 8601 Datetime, or null if the filter does not expire
     */
    expiresAt?: string;
    /**
     * The ID of the filter in the database. Cast from an integer, but not guaranteed to be a number.
     */
    id?: string;
    /**
     * Should matching entities in home and notifications be dropped by the server?
     */
    irreversible?: boolean;
    /**
     * The text to be filtered.
     */
    phrase?: string;
    /**
     * Should the filter consider word boundaries?
     */
    wholeWord?: boolean;
}
