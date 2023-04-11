import { SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";
/**
 * The locale this Blog is set to.
 */
export declare class BlogLocale extends SpeakeasyBase {
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
 * The container of pages in this blog.
 */
export declare class BlogPages extends SpeakeasyBase {
    /**
     * The URL of the container for pages in this blog.
     */
    selfLink?: string;
    /**
     * The count of pages in this blog.
     */
    totalItems?: number;
}
/**
 * The container of posts in this blog.
 */
export declare class BlogPosts extends SpeakeasyBase {
    /**
     * The List of Posts for this Blog.
     */
    items?: Post[];
    /**
     * The URL of the container for posts in this blog.
     */
    selfLink?: string;
    /**
     * The count of posts in this blog.
     */
    totalItems?: number;
}
/**
 * The status of the blog.
 */
export declare enum BlogStatusEnum {
    Live = "LIVE",
    Deleted = "DELETED"
}
/**
 * Successful response
 */
export declare class Blog extends SpeakeasyBase {
    /**
     * The JSON custom meta-data for the Blog.
     */
    customMetaData?: string;
    /**
     * The description of this blog. This is displayed underneath the title.
     */
    description?: string;
    /**
     * The identifier for this resource.
     */
    id?: string;
    /**
     * The kind of this entry. Always blogger#blog.
     */
    kind?: string;
    /**
     * The locale this Blog is set to.
     */
    locale?: BlogLocale;
    /**
     * The name of this blog. This is displayed as the title.
     */
    name?: string;
    /**
     * The container of pages in this blog.
     */
    pages?: BlogPages;
    /**
     * The container of posts in this blog.
     */
    posts?: BlogPosts;
    /**
     * RFC 3339 date-time when this blog was published.
     */
    published?: string;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * The status of the blog.
     */
    status?: BlogStatusEnum;
    /**
     * RFC 3339 date-time when this blog was last updated.
     */
    updated?: string;
    /**
     * The URL where this blog is published.
     */
    url?: string;
}
