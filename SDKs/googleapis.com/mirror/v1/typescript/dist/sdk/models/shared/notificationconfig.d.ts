import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Controls how notifications for a timeline item are presented to the user.
 */
export declare class NotificationConfig extends SpeakeasyBase {
    /**
     * The time at which the notification should be delivered.
     */
    deliveryTime?: Date;
    /**
     * Describes how important the notification is. Allowed values are:
     *
     * @remarks
     * - DEFAULT - Notifications of default importance. A chime will be played to alert users.
     */
    level?: string;
}
