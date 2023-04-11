import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingConfig } from "./streamingconfig";
/**
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
 */
export declare class NotificationConfig extends SpeakeasyBase {
    /**
     * The description of the notification config (max of 1024 characters).
     */
    description?: string;
    /**
     * The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     */
    name?: string;
    /**
     * The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".
     */
    pubsubTopic?: string;
    /**
     * Output only. The service account that needs "pubsub.topics.publish" permission to publish to the Pub/Sub topic.
     */
    serviceAccount?: string;
    /**
     * The config for streaming-based notifications, which send each event as soon as it is detected.
     */
    streamingConfig?: StreamingConfig;
}
/**
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
 */
export declare class NotificationConfigInput extends SpeakeasyBase {
    /**
     * The description of the notification config (max of 1024 characters).
     */
    description?: string;
    /**
     * The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     */
    name?: string;
    /**
     * The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".
     */
    pubsubTopic?: string;
    /**
     * The config for streaming-based notifications, which send each event as soon as it is detected.
     */
    streamingConfig?: StreamingConfig;
}
