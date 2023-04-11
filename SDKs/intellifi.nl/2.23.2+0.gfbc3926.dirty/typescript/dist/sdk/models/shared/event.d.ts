import { SpeakeasyBase } from "../../../internal/utils";
import { EventTopicActionEnum } from "./eventtopicactionenum";
import { EventTopicResourceTypeEnum } from "./eventtopicresourcetypeenum";
export declare class EventTopic extends SpeakeasyBase {
    /**
     * Indicates the kind of event that was executed. In most cases it's a verb. I.e. 'connected', 'created' etc...
     */
    action?: EventTopicActionEnum;
    /**
     * Extra arguments may be added to a topic string, it depends on the `resource_type` and the `action` what extra arguments are added.
     */
    arguments?: any;
    /**
     * Unique identifier for resource.
     */
    resourceId?: string;
    /**
     * The The available event topic resources types on the API. Is written in its plural form.
     */
    resourceType?: EventTopicResourceTypeEnum;
    /**
     * Url to the individual resource.
     */
    resourceUrl?: string;
}
/**
 * A JSON object containing the event
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * An object containing the payload, if any, of the event.
     */
    payload?: any;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this event was generated on the device. This is the device's own timestamp. Could be different due to buffering and clock differences.
     */
    timeEvent?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource is going to be deleted.
     */
    timeExpire?: string;
    topic?: EventTopic;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
