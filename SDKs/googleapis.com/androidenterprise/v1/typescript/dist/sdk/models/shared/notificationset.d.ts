import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
 */
export declare class NotificationSet extends SpeakeasyBase {
    /**
     * The notifications received, or empty if no notifications are present.
     */
    notification?: Notification[];
    /**
     * The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present.
     */
    notificationSetId?: string;
}
