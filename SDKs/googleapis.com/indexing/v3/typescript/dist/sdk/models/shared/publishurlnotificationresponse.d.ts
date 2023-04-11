import { SpeakeasyBase } from "../../../internal/utils";
import { UrlNotificationMetadata } from "./urlnotificationmetadata";
/**
 * Output for PublishUrlNotification
 */
export declare class PublishUrlNotificationResponse extends SpeakeasyBase {
    /**
     * Summary of the most recent Indexing API notifications successfully received, for a given URL.
     */
    urlNotificationMetadata?: UrlNotificationMetadata;
}
