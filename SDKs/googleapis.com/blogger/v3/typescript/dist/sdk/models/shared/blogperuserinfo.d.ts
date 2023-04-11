import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
 */
export declare enum BlogPerUserInfoRoleEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BlogPerUserInfo extends SpeakeasyBase {
    /**
     * ID of the Blog resource.
     */
    blogId?: string;
    /**
     * True if the user has Admin level access to the blog.
     */
    hasAdminAccess?: boolean;
    /**
     * The kind of this entity. Always blogger#blogPerUserInfo.
     */
    kind?: string;
    /**
     * The Photo Album Key for the user when adding photos to the blog.
     */
    photosAlbumKey?: string;
    /**
     * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
     */
    role?: BlogPerUserInfoRoleEnum;
    /**
     * ID of the User.
     */
    userId?: string;
}
