import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * Successful response
 */
export declare class PeopleFeed extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.
     */
    items?: Person[];
    /**
     * Identifies this resource as a collection of people. Value: "plus#peopleFeed".
     */
    kind?: string;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
    /**
     * Link to this resource.
     */
    selfLink?: string;
    /**
     * The title of this collection of people.
     */
    title?: string;
    /**
     * The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
     */
    totalItems?: number;
}
