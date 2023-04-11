import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceEvent extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Event resource.
     */
    accountSid?: string;
    /**
     * The SID of the resource that triggered the event.
     */
    actorSid?: string;
    /**
     * The type of resource that triggered the event.
     */
    actorType?: string;
    /**
     * The absolute URL of the resource that triggered the event.
     */
    actorUrl?: string;
    /**
     * A description of the event.
     */
    description?: string;
    /**
     * Data about the event. For more information, see [Event types](https://www.twilio.com/docs/taskrouter/api/event#event-types).
     */
    eventData?: any;
    /**
     * The time the event was sent, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    eventDate?: Date;
    /**
     * The time the event was sent in milliseconds.
     */
    eventDateMs?: number;
    /**
     * The identifier for the event.
     */
    eventType?: string;
    /**
     * The SID of the object the event is most relevant to, such as a TaskSid, ReservationSid, or a  WorkerSid.
     */
    resourceSid?: string;
    /**
     * The type of object the event is most relevant to, such as a Task, Reservation, or a Worker).
     */
    resourceType?: string;
    /**
     * The URL of the resource the event is most relevant to.
     */
    resourceUrl?: string;
    /**
     * The unique string that we created to identify the Event resource.
     */
    sid?: string;
    /**
     * Where the Event originated.
     */
    source?: string;
    /**
     * The IP from which the Event originated.
     */
    sourceIpAddress?: string;
    /**
     * The absolute URL of the Event resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Event.
     */
    workspaceSid?: string;
}
