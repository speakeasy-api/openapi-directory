import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * The creator's avatar.
 */
export declare class PostAuthorImage extends SpeakeasyBase {
    /**
     * The creator's avatar URL.
     */
    url?: string;
}
/**
 * The author of this Post.
 */
export declare class PostAuthor extends SpeakeasyBase {
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
    image?: PostAuthorImage;
    /**
     * The URL of the creator's Profile page.
     */
    url?: string;
}
/**
 * Data about the blog containing this Post.
 */
export declare class PostBlog extends SpeakeasyBase {
    /**
     * The identifier of the Blog that contains this Post.
     */
    id?: string;
}
export declare class PostImages extends SpeakeasyBase {
    url?: string;
}
/**
 * The location for geotagged posts.
 */
export declare class PostLocation extends SpeakeasyBase {
    /**
     * Location's latitude.
     */
    lat?: number;
    /**
     * Location's longitude.
     */
    lng?: number;
    /**
     * Location name.
     */
    name?: string;
    /**
     * Location's viewport span. Can be used when rendering a map preview.
     */
    span?: string;
}
/**
 * Comment control and display setting for readers of this post.
 */
export declare enum PostReaderCommentsEnum {
    Allow = "ALLOW",
    DontAllowShowExisting = "DONT_ALLOW_SHOW_EXISTING",
    DontAllowHideExisting = "DONT_ALLOW_HIDE_EXISTING"
}
/**
 * The container of comments on this Post.
 */
export declare class PostReplies extends SpeakeasyBase {
    /**
     * The List of Comments for this Post.
     */
    items?: Comment[];
    /**
     * The URL of the comments on this post.
     */
    selfLink?: string;
    /**
     * The count of comments on this post.
     */
    totalItems?: string;
}
/**
 * Status of the post. Only set for admin-level requests.
 */
export declare enum PostStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    Scheduled = "SCHEDULED",
    SoftTrashed = "SOFT_TRASHED"
}
/**
 * Successful response
 */
export declare class Post extends SpeakeasyBase {
    /**
     * The author of this Post.
     */
    author?: PostAuthor;
    /**
     * Data about the blog containing this Post.
     */
    blog?: PostBlog;
    /**
     * The content of the Post. May contain HTML markup.
     */
    content?: string;
    /**
     * The JSON meta-data for the Post.
     */
    customMetaData?: string;
    /**
     * Etag of the resource.
     */
    etag?: string;
    /**
     * The identifier of this Post.
     */
    id?: string;
    /**
     * Display image for the Post.
     */
    images?: PostImages[];
    /**
     * The kind of this entity. Always blogger#post.
     */
    kind?: string;
    /**
     * The list of labels this Post was tagged with.
     */
    labels?: string[];
    /**
     * The location for geotagged posts.
     */
    location?: PostLocation;
    /**
     * RFC 3339 date-time when this Post was published.
     */
    published?: string;
    /**
     * Comment control and display setting for readers of this post.
     */
    readerComments?: PostReaderCommentsEnum;
    /**
     * The container of comments on this Post.
     */
    replies?: PostReplies;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * Status of the post. Only set for admin-level requests.
     */
    status?: PostStatusEnum;
    /**
     * The title of the Post.
     */
    title?: string;
    /**
     * The title link URL, similar to atom's related link.
     */
    titleLink?: string;
    /**
     * RFC 3339 date-time when this Post was last trashed.
     */
    trashed?: string;
    /**
     * RFC 3339 date-time when this Post was last updated.
     */
    updated?: string;
    /**
     * The URL where this Post is displayed.
     */
    url?: string;
}
