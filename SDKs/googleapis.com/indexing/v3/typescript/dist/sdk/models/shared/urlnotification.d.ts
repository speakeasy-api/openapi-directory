import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The URL life cycle event that Google is being notified about.
 */
export declare enum UrlNotificationTypeEnum {
    UrlNotificationTypeUnspecified = "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    UrlUpdated = "URL_UPDATED",
    UrlDeleted = "URL_DELETED"
}
/**
 * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
 */
export declare class UrlNotification extends SpeakeasyBase {
    /**
     * Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time.
     */
    notifyTime?: string;
    /**
     * The URL life cycle event that Google is being notified about.
     */
    type?: UrlNotificationTypeEnum;
    /**
     * The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google.
     */
    url?: string;
}
