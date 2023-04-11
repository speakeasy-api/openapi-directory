import { SpeakeasyBase } from "../../../internal/utils";
import { GranularStats } from "./granularstats";
/**
 * The data statistics of a series of TIMESTAMP values.
 */
export declare class TimestampStats extends SpeakeasyBase {
    /**
     * The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated).
     */
    granularStats?: Record<string, GranularStats>;
}
