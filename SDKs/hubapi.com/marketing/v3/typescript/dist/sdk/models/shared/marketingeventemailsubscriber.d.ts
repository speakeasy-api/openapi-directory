import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarketingEventEmailSubscriber extends SpeakeasyBase {
    contactProperties?: Record<string, string>;
    /**
     * The email address of the contact in HubSpot to associate with the event. Note that the contact must already exist in HubSpot; a contact will not be created.
     */
    email: string;
    /**
     * The date and time at which the contact subscribed to the event.
     */
    interactionDateTime: number;
    properties?: Record<string, string>;
}
