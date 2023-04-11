import { SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodUpdate } from "./eventperiodupdate";
/**
 * An event period update resource.
 */
export declare class EventRecordRequest extends SpeakeasyBase {
    /**
     * The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).
     */
    currentTimeMillis?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordRequest`.
     */
    kind?: string;
    /**
     * The request ID used to identify this attempt to record events.
     */
    requestId?: string;
    /**
     * A list of the time period updates being made in this request.
     */
    timePeriods?: EventPeriodUpdate[];
}
