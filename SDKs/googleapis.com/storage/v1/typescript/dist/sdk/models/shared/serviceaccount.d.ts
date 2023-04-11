import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A subscription to receive Google PubSub notifications.
 */
export declare class ServiceAccount extends SpeakeasyBase {
    /**
     * The ID of the notification.
     */
    emailAddress?: string;
    /**
     * The kind of item this is. For notifications, this is always storage#notification.
     */
    kind?: string;
}
