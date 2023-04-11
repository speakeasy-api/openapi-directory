import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Contact } from "./contact";
import { Location } from "./location";
import { MenuItem } from "./menuitem";
import { NotificationConfig } from "./notificationconfig";
/**
 * Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
 */
export declare class TimelineItem extends SpeakeasyBase {
    /**
     * A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:
     *
     * @remarks
     * - attachment: <img src="attachment:attachment_index"> where attachment_index is the 0-based index of this array.
     * - cid: <img src="cid:attachment_id"> where attachment_id is the ID of the attachment.
     */
    attachments?: Attachment[];
    /**
     * The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.
     */
    bundleId?: string;
    /**
     * A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.
     */
    canonicalUrl?: string;
    /**
     * The time at which this item was created, formatted according to RFC 3339.
     */
    created?: Date;
    /**
     * A person or group that can be used as a creator or a contact.
     */
    creator?: Contact;
    /**
     * The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.
     */
    displayTime?: Date;
    /**
     * ETag for this item.
     */
    etag?: string;
    /**
     * HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.
     *
     * @remarks
     * Allowed HTML elements - You can use these elements in your timeline cards.
     *
     * - Headers: h1, h2, h3, h4, h5, h6
     * - Images: img
     * - Lists: li, ol, ul
     * - HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time
     * - Structural: blockquote, br, div, hr, p, span
     * - Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup
     * - Tables: table, tbody, td, tfoot, th, thead, tr
     * Blocked HTML elements: These elements and their contents are removed from HTML payloads.
     *
     * - Document headers: head, title
     * - Embeds: audio, embed, object, source, video
     * - Frames: frame, frameset
     * - Scripting: applet, script
     * Other elements: Any elements that aren't listed are removed, but their contents are preserved.
     */
    html?: string;
    /**
     * The ID of the timeline item. This is unique within a user's timeline.
     */
    id?: string;
    /**
     * If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.
     */
    inReplyTo?: string;
    /**
     * Whether this item is a bundle cover.
     *
     * @remarks
     *
     * If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.
     *
     * On the main timeline, items that are shown are:
     * - Items that have isBundleCover set to true
     * - Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:
     * - Items that have the bundleId in question AND isBundleCover set to false
     */
    isBundleCover?: boolean;
    /**
     * When true, indicates this item is deleted, and only the ID property is set.
     */
    isDeleted?: boolean;
    /**
     * When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.
     */
    isPinned?: boolean;
    /**
     * The type of resource. This is always mirror#timelineItem.
     */
    kind?: string;
    /**
     * A geographic location that can be associated with a timeline item.
     */
    location?: Location;
    /**
     * A list of menu items that will be presented to the user when this item is selected in the timeline.
     */
    menuItems?: MenuItem[];
    /**
     * Controls how notifications for a timeline item are presented to the user.
     */
    notification?: NotificationConfig;
    /**
     * For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.
     */
    pinScore?: number;
    /**
     * A list of users or groups that this item has been shared with.
     */
    recipients?: Contact[];
    /**
     * A URL that can be used to retrieve this item.
     */
    selfLink?: string;
    /**
     * Opaque string you can use to map a timeline item to data in your own service.
     */
    sourceItemId?: string;
    /**
     * The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.
     *
     * @remarks
     *
     * Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
     */
    speakableText?: string;
    /**
     * A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
     *
     * @remarks
     *
     * This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".
     *
     * Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.
     */
    speakableType?: string;
    /**
     * Text content of this item.
     */
    text?: string;
    /**
     * The title of this item.
     */
    title?: string;
    /**
     * The time at which this item was last modified, formatted according to RFC 3339.
     */
    updated?: Date;
}
