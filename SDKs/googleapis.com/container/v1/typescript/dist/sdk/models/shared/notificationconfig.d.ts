import { SpeakeasyBase } from "../../../internal/utils";
import { PubSub } from "./pubsub";
/**
 * NotificationConfig is the configuration of notifications.
 */
export declare class NotificationConfig extends SpeakeasyBase {
    /**
     * Pub/Sub specific notification config.
     */
    pubsub?: PubSub;
}
