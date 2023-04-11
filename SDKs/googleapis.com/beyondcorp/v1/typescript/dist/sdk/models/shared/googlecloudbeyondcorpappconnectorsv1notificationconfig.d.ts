import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig";
/**
 * NotificationConfig defines the mechanisms to notify instance agent.
 */
export declare class GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig extends SpeakeasyBase {
    /**
     * The configuration for Pub/Sub messaging for the AppConnector.
     */
    pubsubNotification?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig;
}
