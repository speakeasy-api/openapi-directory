import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The container of blogs for this user.
 */
export declare class UserBlogs extends SpeakeasyBase {
    /**
     * The URL of the Blogs for this user.
     */
    selfLink?: string;
}
/**
 * This user's locale
 */
export declare class UserLocale extends SpeakeasyBase {
    /**
     * The country this blog's locale is set to.
     */
    country?: string;
    /**
     * The language this blog is authored in.
     */
    language?: string;
    /**
     * The language variant this blog is authored in.
     */
    variant?: string;
}
/**
 * Successful response
 */
export declare class User extends SpeakeasyBase {
    /**
     * Profile summary information.
     */
    about?: string;
    /**
     * The container of blogs for this user.
     */
    blogs?: UserBlogs;
    /**
     * The timestamp of when this profile was created, in seconds since epoch.
     */
    created?: string;
    /**
     * The display name.
     */
    displayName?: string;
    /**
     * The identifier for this User.
     */
    id?: string;
    /**
     * The kind of this entity. Always blogger#user.
     */
    kind?: string;
    /**
     * This user's locale
     */
    locale?: UserLocale;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * The user's profile page.
     */
    url?: string;
}
