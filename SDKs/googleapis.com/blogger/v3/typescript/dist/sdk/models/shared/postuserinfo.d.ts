import { SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";
import { PostPerUserInfo } from "./postperuserinfo";
/**
 * Successful response
 */
export declare class PostUserInfo extends SpeakeasyBase {
    /**
     * The kind of this entity. Always blogger#postUserInfo.
     */
    kind?: string;
    post?: Post;
    postUserInfo?: PostPerUserInfo;
}
