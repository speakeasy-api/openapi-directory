import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cause for the update failure.
 */
export declare enum EventRecordFailureFailureCauseEnum {
    EventUpdateFailureCauseUnspecified = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    InvalidUpdateValue = "INVALID_UPDATE_VALUE"
}
/**
 * An event update failure resource.
 */
export declare class EventRecordFailure extends SpeakeasyBase {
    /**
     * The ID of the event that was not updated.
     */
    eventId?: string;
    /**
     * The cause for the update failure.
     */
    failureCause?: EventRecordFailureFailureCauseEnum;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordFailure`.
     */
    kind?: string;
}
