import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * A list of notification subscriptions.
 */
export declare class Notifications extends SpeakeasyBase {
    /**
     * The list of items.
     */
    items?: Notification[];
    /**
     * The kind of item this is. For lists of notifications, this is always storage#notifications.
     */
    kind?: string;
}
