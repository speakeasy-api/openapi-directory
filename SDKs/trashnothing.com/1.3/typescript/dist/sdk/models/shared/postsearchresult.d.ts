import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
/**
 * An offer, wanted, admin, taken or received post.
 */
export declare class PostSearchResult extends SpeakeasyBase {
    content?: string;
    /**
     * The UTC date and time when the post was published.
     */
    date?: Date;
    /**
     * The UTC date and time when the post will expire.   Currently only offer and wanted posts expire.  For all other posts, expiration is always null.
     *
     * @remarks
     *
     */
    expiration?: Date;
    /**
     * Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).
     */
    footer?: string;
    /**
     * The group ID of the post.  For public posts, this is always null.
     *
     * @remarks
     *
     */
    groupId?: string;
    /**
     * May be null if a post hasn't been mapped.
     */
    latitude?: number;
    /**
     * May be null if a post hasn't been mapped.
     */
    longitude?: number;
    /**
     * For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.
     *
     * @remarks
     *
     */
    outcome?: string;
    /**
     * Details about the photos associated with this post (may be null if there are no photos).
     */
    photos?: Photo[];
    postId?: string;
    /**
     * The count of how many times this post has been reposted in the last 90 days. A value of zero is used to indicate that the post is not a repost. The count is specific to the source of the post (eg. the specific group the post is on). If a post is crossposted to multiple groups, the repost_count of the post on each group may be different for each group depending on how many times the post has been posted on that group in the last 90 days.
     *
     * @remarks
     *
     */
    repostCount?: number;
    /**
     * For wanted posts, whether the item is being requested in order to resell it or not. Will be null for all posts that are not wanted posts and for wanted posts where the poster hasn't indicated whether or not they intend to resell the item they are requesting.
     *
     * @remarks
     *
     */
    reselling?: boolean;
    /**
     * A snippet of the post content as HTML with the parts of the content that matched the search query (if any) wrapped in an HTML span tags with the class 'highlight' (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the post content matched the search query. <br /><br /> NOTE: This is not the full content of the post  It is just a snippet of around 200 characters that can be used to display the parts of the post content relevant to the search query.
     *
     * @remarks
     *
     */
    searchContent?: string;
    /**
     * The post subject as HTML with the parts of the subject that matched the search query (if any) wrapped in HTML span tags with the class 'highlight'. (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the subject matched the search query.
     *
     * @remarks
     *
     */
    searchTitle?: string;
    /**
     * The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.
     *
     * @remarks
     *
     */
    source?: string;
    title?: string;
    /**
     * The type of post.  One of: offer, taken, wanted, received, admin
     *
     * @remarks
     *
     */
    type?: string;
    /**
     * The link to use to view the post on the trash nothing site.
     */
    url?: string;
    userId?: string;
}
