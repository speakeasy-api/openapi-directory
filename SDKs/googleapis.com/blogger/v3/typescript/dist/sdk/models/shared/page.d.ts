import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The creator's avatar.
 */
export declare class PageAuthorImage extends SpeakeasyBase {
    /**
     * The creator's avatar URL.
     */
    url?: string;
}
/**
 * The author of this Page.
 */
export declare class PageAuthor extends SpeakeasyBase {
    /**
     * The display name.
     */
    displayName?: string;
    /**
     * The identifier of the creator.
     */
    id?: string;
    /**
     * The creator's avatar.
     */
    image?: PageAuthorImage;
    /**
     * The URL of the creator's Profile page.
     */
    url?: string;
}
/**
 * Data about the blog containing this Page.
 */
export declare class PageBlog extends SpeakeasyBase {
    /**
     * The identifier of the blog containing this page.
     */
    id?: string;
}
/**
 * The status of the page for admin resources (either LIVE or DRAFT).
 */
export declare enum PageStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    SoftTrashed = "SOFT_TRASHED"
}
/**
 * Successful response
 */
export declare class Page extends SpeakeasyBase {
    /**
     * The author of this Page.
     */
    author?: PageAuthor;
    /**
     * Data about the blog containing this Page.
     */
    blog?: PageBlog;
    /**
     * The body content of this Page, in HTML.
     */
    content?: string;
    /**
     * Etag of the resource.
     */
    etag?: string;
    /**
     * The identifier for this resource.
     */
    id?: string;
    /**
     * The kind of this entity. Always blogger#page.
     */
    kind?: string;
    /**
     * RFC 3339 date-time when this Page was published.
     */
    published?: string;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * The status of the page for admin resources (either LIVE or DRAFT).
     */
    status?: PageStatusEnum;
    /**
     * The title of this entity. This is the name displayed in the Admin user interface.
     */
    title?: string;
    /**
     * RFC 3339 date-time when this Page was trashed.
     */
    trashed?: string;
    /**
     * RFC 3339 date-time when this Page was last updated.
     */
    updated?: string;
    /**
     * The URL that this Page is displayed at.
     */
    url?: string;
}
