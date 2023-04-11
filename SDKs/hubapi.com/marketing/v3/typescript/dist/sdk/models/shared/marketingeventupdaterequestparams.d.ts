import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyValue } from "./propertyvalue";
export declare class MarketingEventUpdateRequestParams extends SpeakeasyBase {
    /**
     * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.
     *
     * @remarks
     * In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.
     *
     */
    customProperties?: PropertyValue[];
    /**
     * The end date and time of the marketing event.
     */
    endDateTime?: Date;
    /**
     * Indicates if the marketing event has been cancelled. Defaults to `false`
     */
    eventCancelled?: boolean;
    /**
     * The description of the marketing event.
     */
    eventDescription?: string;
    /**
     * The name of the marketing event.
     */
    eventName?: string;
    /**
     * The name of the organizer of the marketing event.
     */
    eventOrganizer?: string;
    /**
     * Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`
     */
    eventType?: string;
    /**
     * A URL in the external event application where the marketing event can be managed.
     */
    eventUrl?: string;
    /**
     * The start date and time of the marketing event.
     */
    startDateTime?: Date;
}
