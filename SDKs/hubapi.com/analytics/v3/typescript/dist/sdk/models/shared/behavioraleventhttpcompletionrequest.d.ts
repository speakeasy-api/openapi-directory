import { SpeakeasyBase } from "../../../internal/utils";
export declare class BehavioralEventHttpCompletionRequest extends SpeakeasyBase {
    /**
     * Email of visitor
     */
    email?: string;
    /**
     * Internal name of the event-type to trigger
     */
    eventName: string;
    /**
     * The object id that this event occurred on. Could be a contact id or a visitor id.
     */
    objectId?: string;
    /**
     * The time when this event occurred (if any). If this isn't set, the current time will be used
     */
    occurredAt?: Date;
    /**
     * Map of properties for the event in the format property internal name - property value
     */
    properties: Record<string, string>;
    /**
     * User token
     */
    utk?: string;
}
