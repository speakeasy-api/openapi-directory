import { SpeakeasyBase } from "../../../internal/utils";
import { ChildReference } from "./childreference";
/**
 * A list of children of a file.
 */
export declare class ChildList extends SpeakeasyBase {
    /**
     * The ETag of the list.
     */
    etag?: string;
    /**
     * The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: ChildReference[];
    /**
     * This is always drive#childList.
     */
    kind?: string;
    /**
     * A link to the next page of children.
     */
    nextLink?: string;
    /**
     * The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * A link back to this list.
     */
    selfLink?: string;
}
