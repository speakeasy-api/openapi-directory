import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a subscription to the push streaming server.
 *
 * @see {@link https://docs.joinmastodon.org/entities/pushsubscription/}
 */
export declare class PushSubscription extends SpeakeasyBase {
    /**
     * Which alerts should be delivered to the `endpoint`.
     */
    alerts: Record<string, any>;
    /**
     * Where push alerts will be sent to.
     */
    endpoint: string;
    /**
     * The ID of the push subscription in the database. Cast from an integer, but not guaranteed to be a number.
     */
    id: string;
    /**
     * The streaming server's VAPID key.
     */
    serverKey: string;
}
