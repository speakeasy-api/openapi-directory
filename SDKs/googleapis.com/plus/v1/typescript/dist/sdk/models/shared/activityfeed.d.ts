import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * Successful response
 */
export declare class ActivityFeed extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID of this collection of activities. Deprecated.
     */
    id?: string;
    /**
     * The activities in this page of results.
     */
    items?: Activity[];
    /**
     * Identifies this resource as a collection of activities. Value: "plus#activityFeed".
     */
    kind?: string;
    /**
     * Link to the next page of activities.
     */
    nextLink?: string;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
    /**
     * Link to this activity resource.
     */
    selfLink?: string;
    /**
     * The title of this collection of activities, which is a truncated portion of the content.
     */
    title?: string;
    /**
     * The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: Date;
}
