import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
/**
 * A monthly schedule for data to refresh on specific days in the month in a given time interval.
 */
export declare class DataSourceRefreshMonthlySchedule extends SpeakeasyBase {
    /**
     * Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At lesat one day must be specified.
     */
    daysOfMonth?: number[];
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    startTime?: TimeOfDay;
}
