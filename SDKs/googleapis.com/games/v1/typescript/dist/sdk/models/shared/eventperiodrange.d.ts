import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event period time range.
 */
export declare class EventPeriodRange extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodRange`.
     */
    kind?: string;
    /**
     * The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).
     */
    periodEndMillis?: string;
    /**
     * The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).
     */
    periodStartMillis?: string;
}
