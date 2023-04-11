import { SpeakeasyBase } from "../../../internal/utils";
import { EventBatchRecordFailure } from "./eventbatchrecordfailure";
import { EventRecordFailure } from "./eventrecordfailure";
import { PlayerEvent } from "./playerevent";
/**
 * An event period update resource.
 */
export declare class EventUpdateResponse extends SpeakeasyBase {
    /**
     * Any batch-wide failures which occurred applying updates.
     */
    batchFailures?: EventBatchRecordFailure[];
    /**
     * Any failures updating a particular event.
     */
    eventFailures?: EventRecordFailure[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateResponse`.
     */
    kind?: string;
    /**
     * The current status of any updated events
     */
    playerEvents?: PlayerEvent[];
}
