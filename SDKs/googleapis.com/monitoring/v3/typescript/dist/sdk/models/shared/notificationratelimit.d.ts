import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Control over the rate of notifications sent to this alert policy's notification channels.
 */
export declare class NotificationRateLimit extends SpeakeasyBase {
    /**
     * Not more than one notification per period.
     */
    period?: string;
}
