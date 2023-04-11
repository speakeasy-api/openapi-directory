import { SpeakeasyBase } from "../../../internal/utils";
import { DailyResourceUsageAggregationCPU } from "./dailyresourceusageaggregationcpu";
import { DailyResourceUsageAggregationDisk } from "./dailyresourceusageaggregationdisk";
import { DailyResourceUsageAggregationMemory } from "./dailyresourceusageaggregationmemory";
import { DailyResourceUsageAggregationNetwork } from "./dailyresourceusageaggregationnetwork";
import { Date } from "./date";
/**
 * Usage data aggregation for a single day.
 */
export declare class DailyResourceUsageAggregation extends SpeakeasyBase {
    /**
     * Statistical aggregation of CPU usage.
     */
    cpu?: DailyResourceUsageAggregationCPU;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * Statistical aggregation of disk usage.
     */
    disk?: DailyResourceUsageAggregationDisk;
    /**
     * Statistical aggregation of memory usage.
     */
    memory?: DailyResourceUsageAggregationMemory;
    /**
     * Statistical aggregation of network usage.
     */
    network?: DailyResourceUsageAggregationNetwork;
}
