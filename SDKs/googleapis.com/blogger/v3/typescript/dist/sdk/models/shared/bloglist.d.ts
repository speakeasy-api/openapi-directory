import { SpeakeasyBase } from "../../../internal/utils";
import { Blog } from "./blog";
import { BlogUserInfo } from "./bloguserinfo";
/**
 * Successful response
 */
export declare class BlogList extends SpeakeasyBase {
    /**
     * Admin level list of blog per-user information.
     */
    blogUserInfos?: BlogUserInfo[];
    /**
     * The list of Blogs this user has Authorship or Admin rights over.
     */
    items?: Blog[];
    /**
     * The kind of this entity. Always blogger#blogList.
     */
    kind?: string;
}
