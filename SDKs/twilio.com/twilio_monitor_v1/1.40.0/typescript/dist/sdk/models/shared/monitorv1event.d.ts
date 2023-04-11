import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class MonitorV1Event extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Event resource.
     */
    accountSid?: string;
    /**
     * The SID of the actor that caused the event, if available. Can be `null`.
     */
    actorSid?: string;
    /**
     * The type of actor that caused the event. Can be: `user` for a change made by a logged-in user in the Twilio Console, `account` for an event caused by an API request by an authenticating Account, `twilio-admin` for an event caused by a Twilio employee, and so on.
     */
    actorType?: string;
    /**
     * A description of the event. Can be `null`.
     */
    description?: string;
    /**
     * An object with additional data about the event. The  contents depend on `event_type`. For example, event-types of the form `RESOURCE.updated`, this value contains a `resource_properties` dictionary that describes the previous and updated properties of the resource.
     */
    eventData?: any;
    /**
     * The date and time in GMT when the event was recorded specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    eventDate?: Date;
    /**
     * The event's type. Event-types are typically in the form: `RESOURCE_TYPE.ACTION`, where `RESOURCE_TYPE` is the type of resource that was affected and `ACTION` is what happened to it. For example, `phone-number.created`. For a full list of all event-types, see the [Monitor Event Types](https://www.twilio.com/docs/usage/monitor-events#event-types).
     */
    eventType?: string;
    /**
     * The absolute URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The SID of the resource that was affected.
     */
    resourceSid?: string;
    /**
     * The type of resource that was affected. For a full list of all resource-types, see the [Monitor Event Types](https://www.twilio.com/docs/usage/monitor-events#event-types).
     */
    resourceType?: string;
    /**
     * The unique string that we created to identify the Event resource.
     */
    sid?: string;
    /**
     * The originating system or interface that caused the event.  Can be: `web` for events caused by user action in the Twilio Console, `api` for events caused by a request to our API, or   `twilio` for events caused by an automated or internal Twilio system.
     */
    source?: string;
    /**
     * The IP address of the source, if the source is outside the Twilio cloud. This value is `null` for events with `source` of `twilio`
     */
    sourceIpAddress?: string;
    /**
     * The absolute URL of the resource that was affected. Can be `null`.
     */
    url?: string;
}
