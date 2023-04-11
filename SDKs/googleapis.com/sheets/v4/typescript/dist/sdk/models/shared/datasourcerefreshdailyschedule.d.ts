import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
/**
 * A schedule for data to refresh every day in a given time interval.
 */
export declare class DataSourceRefreshDailySchedule extends SpeakeasyBase {
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    startTime?: TimeOfDay;
}
