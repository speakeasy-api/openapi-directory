import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A subscription to receive Google PubSub notifications.
 */
export declare class Notification extends SpeakeasyBase {
    /**
     * An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.
     */
    customAttributes?: Record<string, string>;
    /**
     * HTTP 1.1 Entity tag for this subscription notification.
     */
    etag?: string;
    /**
     * If present, only send notifications about listed event types. If empty, sent notifications for all event types.
     */
    eventTypes?: string[];
    /**
     * The ID of the notification.
     */
    id?: string;
    /**
     * The kind of item this is. For notifications, this is always storage#notification.
     */
    kind?: string;
    /**
     * If present, only apply this notification configuration to object names that begin with this prefix.
     */
    objectNamePrefix?: string;
    /**
     * The desired content of the Payload.
     */
    payloadFormat?: string;
    /**
     * The canonical URL of this notification.
     */
    selfLink?: string;
    /**
     * The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}'
     */
    topic?: string;
}
