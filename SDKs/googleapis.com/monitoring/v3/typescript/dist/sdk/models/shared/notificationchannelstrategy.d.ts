import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Control over how the notification channels in notification_channels are notified when this alert fires, on a per-channel basis.
 */
export declare class NotificationChannelStrategy extends SpeakeasyBase {
    /**
     * The full REST resource name for the notification channels that these settings apply to. Each of these correspond to the name field in one of the NotificationChannel objects referenced in the notification_channels field of this AlertPolicy. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]
     */
    notificationChannelNames?: string[];
    /**
     * The frequency at which to send reminder notifications for open incidents.
     */
    renotifyInterval?: string;
}
