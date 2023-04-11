import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Notification configurations.
 */
export declare class JobNotification extends SpeakeasyBase {
    /**
     * Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
     */
    message?: Message;
    /**
     * The Pub/Sub topic where notifications like the job state changes will be published. This topic exist in the same project as the job and billings will be charged to this project. If not specified, no Pub/Sub messages will be sent. Topic format: `projects/{project}/topics/{topic}`.
     */
    pubsubTopic?: string;
}
