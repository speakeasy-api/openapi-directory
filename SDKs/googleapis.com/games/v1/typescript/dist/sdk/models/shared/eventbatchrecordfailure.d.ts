import { SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodRange } from "./eventperiodrange";
/**
 * The cause for the update failure.
 */
export declare enum EventBatchRecordFailureFailureCauseEnum {
    EventFailureCauseUnspecified = "EVENT_FAILURE_CAUSE_UNSPECIFIED",
    TooLarge = "TOO_LARGE",
    TimePeriodExpired = "TIME_PERIOD_EXPIRED",
    TimePeriodShort = "TIME_PERIOD_SHORT",
    TimePeriodLong = "TIME_PERIOD_LONG",
    AlreadyUpdated = "ALREADY_UPDATED",
    RecordRateHigh = "RECORD_RATE_HIGH"
}
/**
 * A batch update failure resource.
 */
export declare class EventBatchRecordFailure extends SpeakeasyBase {
    /**
     * The cause for the update failure.
     */
    failureCause?: EventBatchRecordFailureFailureCauseEnum;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventBatchRecordFailure`.
     */
    kind?: string;
    /**
     * An event period time range.
     */
    range?: EventPeriodRange;
}
