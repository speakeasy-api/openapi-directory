import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * A list of comments on a file.
 */
export declare class CommentList extends SpeakeasyBase {
    /**
     * The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    comments?: Comment[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#commentList".
     */
    kind?: string;
    /**
     * The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
}
