import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Application } from "./application";
import { Attachment } from "./attachment";
import { Card } from "./card";
import { Emoji } from "./emoji";
import { Mention } from "./mention";
import { Poll } from "./poll";
import { Tag } from "./tag";
/**
 * Visibility of this status.
 */
export declare enum StatusVisibilityEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private",
    Direct = "direct"
}
/**
 * Represents a status posted by an account.
 *
 * @see {@link https://docs.joinmastodon.org/entities/status/}
 */
export declare class Status extends SpeakeasyBase {
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    account?: Account;
    /**
     * Represents an application that interfaces with the REST API to access accounts or post statuses.
     */
    application?: Application;
    /**
     * Have you bookmarked this status?
     */
    bookmarked?: boolean;
    /**
     * Represents a rich preview card that is generated using OpenGraph tags from a URL.
     */
    card?: Card;
    /**
     * HTML-encoded status content.
     */
    content?: string;
    /**
     * The date when this status was created.
     */
    createdAt?: Date;
    /**
     * Custom emoji to be used when rendering status content.
     */
    emojis?: Emoji[];
    /**
     * Have you favourited this status?
     */
    favourited?: boolean;
    /**
     * How many favourites this status has received.
     */
    favouritesCount?: number;
    /**
     * ID of the status in the database. Cast from an integer but not guaranteed to be a number.
     */
    id?: string;
    /**
     * ID of the account being replied to.
     */
    inReplyToAccountId?: string;
    /**
     * ID of the status being replied. Cast from an integer but not guaranteed to be a number.
     */
    inReplyToId?: string;
    /**
     * Primary language of this status. ISO 639 Part 1 two-letter language code.
     */
    language?: string;
    /**
     * Media that is attached to this status.
     */
    mediaAttachments?: Attachment[];
    /**
     * Mentions of users within the status content.
     */
    mentions?: Mention[];
    /**
     * Have you muted notifications for this status's conversation?
     */
    muted?: boolean;
    /**
     * Have you pinned this status? Only appears if the status is pinnable.
     */
    pinned?: boolean;
    /**
     * Represents a poll attached to a status.
     */
    poll?: Poll;
    /**
     * Represents a status posted by an account.
     */
    reblog?: Status;
    /**
     * Have you boosted this status?
     */
    reblogged?: boolean;
    /**
     * How many boosts this status has received.
     */
    reblogsCount?: number;
    /**
     * How many replies this status has received.
     */
    repliesCount?: number;
    /**
     * Is this status marked as sensitive content?
     */
    sensitive?: boolean;
    /**
     * Subject or summary line, below which status content is collapsed until expanded.
     */
    spoilerText?: string;
    /**
     * Hashtags used within the status content.
     */
    tags?: Tag[];
    /**
     * Plain-text source of a status. Returned instead of `content` when status is deleted, so the user may redraft from the source text without the client having to reverse-engineer the original text from the HTML content.
     */
    text?: string;
    /**
     * URI of the status used for federation.
     */
    uri?: string;
    /**
     * A link to the status's HTML representation.
     */
    url?: string;
    /**
     * Visibility of this status.
     */
    visibility?: StatusVisibilityEnum;
}
