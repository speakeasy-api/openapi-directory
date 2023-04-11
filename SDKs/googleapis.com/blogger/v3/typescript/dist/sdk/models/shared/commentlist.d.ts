import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * Successful response
 */
export declare class CommentList extends SpeakeasyBase {
    /**
     * Etag of the response.
     */
    etag?: string;
    /**
     * The List of Comments for a Post.
     */
    items?: Comment[];
    /**
     * The kind of this entry. Always blogger#commentList.
     */
    kind?: string;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
    /**
     * Pagination token to fetch the previous page, if one exists.
     */
    prevPageToken?: string;
}
