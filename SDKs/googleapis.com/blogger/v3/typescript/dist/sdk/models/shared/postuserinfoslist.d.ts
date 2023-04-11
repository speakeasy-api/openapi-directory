import { SpeakeasyBase } from "../../../internal/utils";
import { PostUserInfo } from "./postuserinfo";
/**
 * Successful response
 */
export declare class PostUserInfosList extends SpeakeasyBase {
    /**
     * The list of Posts with User information for the post, for this Blog.
     */
    items?: PostUserInfo[];
    /**
     * The kind of this entity. Always blogger#postList.
     */
    kind?: string;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
}
