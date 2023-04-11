import { SpeakeasyBase } from "../../../internal/utils";
import { UrlNotification } from "./urlnotification";
/**
 * Summary of the most recent Indexing API notifications successfully received, for a given URL.
 */
export declare class UrlNotificationMetadata extends SpeakeasyBase {
    /**
     * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
     */
    latestRemove?: UrlNotification;
    /**
     * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
     */
    latestUpdate?: UrlNotification;
    /**
     * URL to which this metadata refers.
     */
    url?: string;
}
