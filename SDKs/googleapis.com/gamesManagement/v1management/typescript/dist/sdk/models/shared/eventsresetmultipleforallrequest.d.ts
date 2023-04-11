import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Multiple events reset all request.
 */
export declare class EventsResetMultipleForAllRequest extends SpeakeasyBase {
    /**
     * The IDs of events to reset.
     */
    eventIds?: string[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`.
     */
    kind?: string;
}
