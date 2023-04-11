import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event period update resource.
 */
export declare class EventUpdateRequest extends SpeakeasyBase {
    /**
     * The ID of the event being modified in this update.
     */
    definitionId?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateRequest`.
     */
    kind?: string;
    /**
     * The number of times this event occurred in this time period.
     */
    updateCount?: string;
}
