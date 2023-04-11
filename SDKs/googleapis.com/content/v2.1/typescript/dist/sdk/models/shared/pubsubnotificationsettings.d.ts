import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
 */
export declare class PubsubNotificationSettings extends SpeakeasyBase {
    /**
     * Cloud pub/sub topic to which notifications are sent (read-only).
     */
    cloudTopicName?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#pubsubNotificationSettings`"
     */
    kind?: string;
    /**
     * List of event types. Acceptable values are: - "`orderPendingShipment`"
     */
    registeredEvents?: string[];
}
