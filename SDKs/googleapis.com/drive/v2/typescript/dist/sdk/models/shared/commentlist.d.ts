import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * A list of comments on a file in Google Drive.
 */
export declare class CommentList extends SpeakeasyBase {
    /**
     * The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: Comment[];
    /**
     * This is always drive#commentList.
     */
    kind?: string;
    /**
     * A link to the next page of comments.
     */
    nextLink?: string;
    /**
     * The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * A link back to this list.
     */
    selfLink?: string;
}
