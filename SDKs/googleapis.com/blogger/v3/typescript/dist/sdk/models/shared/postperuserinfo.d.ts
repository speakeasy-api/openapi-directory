import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPerUserInfo extends SpeakeasyBase {
    /**
     * ID of the Blog that the post resource belongs to.
     */
    blogId?: string;
    /**
     * True if the user has Author level access to the post.
     */
    hasEditAccess?: boolean;
    /**
     * The kind of this entity. Always blogger#postPerUserInfo.
     */
    kind?: string;
    /**
     * ID of the Post resource.
     */
    postId?: string;
    /**
     * ID of the User.
     */
    userId?: string;
}
