import { SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";
/**
 * Successful response
 */
export declare class PostList extends SpeakeasyBase {
    /**
     * Etag of the response.
     */
    etag?: string;
    /**
     * The list of Posts for this Blog.
     */
    items?: Post[];
    /**
     * The kind of this entity. Always blogger#postList.
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
