import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.
 */
export declare class Alert extends SpeakeasyBase {
    alertId?: string;
    /**
     * The UTC date and time when the alert was last triggered and sent out (may be null).
     */
    lastSent?: Date;
    /**
     * The search phrase that the alert triggers on.
     */
    search?: string;
    /**
     * The number of time the alert has triggered and been send out.
     */
    sendCount?: number;
    /**
     * A list of the post types that the alert is set to match against.  The available post types are: offer, wanted <br /><br /> NOTE: Additional post types may be added in the future (eg. events) so clients should take care to support arbitrary types being returned.
     *
     * @remarks
     *
     */
    types?: string[];
    userId?: string;
}
