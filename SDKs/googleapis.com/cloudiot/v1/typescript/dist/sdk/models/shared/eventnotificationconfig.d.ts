import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for forwarding telemetry events.
 */
export declare class EventNotificationConfig extends SpeakeasyBase {
    /**
     * A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.
     */
    pubsubTopicName?: string;
    /**
     * If the subfolder name matches this string exactly, this configuration will be used. The string must not include the leading '/' character. If empty, all strings are matched. This field is used only for telemetry events; subfolders are not supported for state changes.
     */
    subfolderMatches?: string;
}
