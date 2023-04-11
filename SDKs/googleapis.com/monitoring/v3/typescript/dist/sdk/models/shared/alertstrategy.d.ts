import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannelStrategy } from "./notificationchannelstrategy";
import { NotificationRateLimit } from "./notificationratelimit";
/**
 * Control over how the notification channels in notification_channels are notified when this alert fires.
 */
export declare class AlertStrategy extends SpeakeasyBase {
    /**
     * If an alert policy that was active has no data for this long, any open incidents will close
     */
    autoClose?: string;
    /**
     * Control how notifications will be sent out, on a per-channel basis.
     */
    notificationChannelStrategy?: NotificationChannelStrategy[];
    /**
     * Control over the rate of notifications sent to this alert policy's notification channels.
     */
    notificationRateLimit?: NotificationRateLimit;
}
