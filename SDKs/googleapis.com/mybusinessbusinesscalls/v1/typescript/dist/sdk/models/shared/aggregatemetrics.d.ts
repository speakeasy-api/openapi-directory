import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { HourlyMetrics } from "./hourlymetrics";
import { WeekDayMetrics } from "./weekdaymetrics";
/**
 * Metrics aggregated over the input time range.
 */
export declare class AggregateMetrics extends SpeakeasyBase {
    /**
     * Total count of answered calls.
     */
    answeredCallsCount?: number;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    endDate?: Date;
    /**
     * A list of metrics by hour of day.
     */
    hourlyMetrics?: HourlyMetrics[];
    /**
     * Total count of missed calls.
     */
    missedCallsCount?: number;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    startDate?: Date;
    /**
     * A list of metrics by day of week.
     */
    weekdayMetrics?: WeekDayMetrics[];
}
