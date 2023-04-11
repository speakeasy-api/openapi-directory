import { SpeakeasyBase } from "../../../internal/utils";
import { LocalPost } from "./localpost";
/**
 * Response message for ListLocalPosts
 */
export declare class ListLocalPostsResponse extends SpeakeasyBase {
    /**
     * The returned list of local posts.
     */
    localPosts?: LocalPost[];
    /**
     * If there are more local posts than the requested page size, then this field is populated with a token to fetch the next page of local posts on a subsequent call to `ListLocalPosts`.
     */
    nextPageToken?: string;
}
