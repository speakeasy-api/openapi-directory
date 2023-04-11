import { SpeakeasyBase } from "../../../internal/utils";
import { Reply } from "./reply";
/**
 * A list of replies to a comment on a file.
 */
export declare class ReplyList extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#replyList".
     */
    kind?: string;
    /**
     * The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    replies?: Reply[];
}
