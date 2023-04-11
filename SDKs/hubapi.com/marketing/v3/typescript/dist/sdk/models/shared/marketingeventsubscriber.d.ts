import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarketingEventSubscriber extends SpeakeasyBase {
    /**
     * The date and time at which the contact subscribed to the event.
     */
    interactionDateTime: number;
    properties?: Record<string, string>;
    vid?: number;
}
