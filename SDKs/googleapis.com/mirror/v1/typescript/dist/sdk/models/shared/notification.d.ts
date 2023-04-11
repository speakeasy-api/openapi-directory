import { SpeakeasyBase } from "../../../internal/utils";
import { UserAction } from "./useraction";
/**
 * A notification delivered by the API.
 */
export declare class Notification extends SpeakeasyBase {
    /**
     * The collection that generated the notification.
     */
    collection?: string;
    /**
     * The ID of the item that generated the notification.
     */
    itemId?: string;
    /**
     * The type of operation that generated the notification.
     */
    operation?: string;
    /**
     * A list of actions taken by the user that triggered the notification.
     */
    userActions?: UserAction[];
    /**
     * The user token provided by the service when it subscribed for notifications.
     */
    userToken?: string;
    /**
     * The secret verify token provided by the service when it subscribed for notifications.
     */
    verifyToken?: string;
}
