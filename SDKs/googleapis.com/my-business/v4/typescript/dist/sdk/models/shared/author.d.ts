import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of user the author is.
 */
export declare enum AuthorTypeEnum {
    AuthorTypeUnspecified = "AUTHOR_TYPE_UNSPECIFIED",
    RegularUser = "REGULAR_USER",
    LocalGuide = "LOCAL_GUIDE",
    Merchant = "MERCHANT"
}
/**
 * Represents the author of a question or answer
 */
export declare class Author extends SpeakeasyBase {
    /**
     * The display name of the user
     */
    displayName?: string;
    /**
     * The profile photo URL of the user.
     */
    profilePhotoUrl?: string;
    /**
     * The type of user the author is.
     */
    type?: AuthorTypeEnum;
}
