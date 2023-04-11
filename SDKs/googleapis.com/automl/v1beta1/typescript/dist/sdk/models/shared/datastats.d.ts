import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayStats } from "./arraystats";
import { CategoryStats } from "./categorystats";
import { Float64Stats } from "./float64stats";
import { StringStats } from "./stringstats";
import { StructStats } from "./structstats";
import { TimestampStats } from "./timestampstats";
/**
 * The data statistics of a series of values that share the same DataType.
 */
export declare class DataStats extends SpeakeasyBase {
    /**
     * The data statistics of a series of ARRAY values.
     */
    arrayStats?: ArrayStats;
    /**
     * The data statistics of a series of CATEGORY values.
     */
    categoryStats?: CategoryStats;
    /**
     * The number of distinct values.
     */
    distinctValueCount?: string;
    /**
     * The data statistics of a series of FLOAT64 values.
     */
    float64Stats?: Float64Stats;
    /**
     * The number of values that are null.
     */
    nullValueCount?: string;
    /**
     * The data statistics of a series of STRING values.
     */
    stringStats?: StringStats;
    /**
     * The data statistics of a series of STRUCT values.
     */
    structStats?: StructStats;
    /**
     * The data statistics of a series of TIMESTAMP values.
     */
    timestampStats?: TimestampStats;
    /**
     * The number of values that are valid.
     */
    validValueCount?: string;
}
