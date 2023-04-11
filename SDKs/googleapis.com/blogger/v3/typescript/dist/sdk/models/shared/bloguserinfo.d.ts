import { SpeakeasyBase } from "../../../internal/utils";
import { Blog } from "./blog";
import { BlogPerUserInfo } from "./blogperuserinfo";
/**
 * Successful response
 */
export declare class BlogUserInfo extends SpeakeasyBase {
    blog?: Blog;
    blogUserInfo?: BlogPerUserInfo;
    /**
     * The kind of this entity. Always blogger#blogUserInfo.
     */
    kind?: string;
}
