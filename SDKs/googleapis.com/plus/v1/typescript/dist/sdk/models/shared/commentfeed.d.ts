import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * Successful response
 */
export declare class CommentFeed extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID of this collection of comments.
     */
    id?: string;
    /**
     * The comments in this page of results.
     */
    items?: Comment[];
    /**
     * Identifies this resource as a collection of comments. Value: "plus#commentFeed".
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
     * The title of this collection of comments.
     */
    title?: string;
    /**
     * The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: Date;
}
