import { SpeakeasyBase } from "../../../internal/utils";
import { CommentReply } from "./commentreply";
/**
 * A list of replies to a comment on a file in Google Drive.
 */
export declare class CommentReplyList extends SpeakeasyBase {
    /**
     * The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    items?: CommentReply[];
    /**
     * This is always drive#commentReplyList.
     */
    kind?: string;
    /**
     * A link to the next page of replies.
     */
    nextLink?: string;
    /**
     * The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * A link back to this list.
     */
    selfLink?: string;
}
