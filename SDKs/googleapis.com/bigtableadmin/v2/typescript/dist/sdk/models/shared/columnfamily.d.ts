import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnFamilyStats } from "./columnfamilystats";
import { GcRule } from "./gcrule";
/**
 * A set of columns within a table which share a common configuration.
 */
export declare class ColumnFamily extends SpeakeasyBase {
    /**
     * Rule for determining which cells to delete during garbage collection.
     */
    gcRule?: GcRule;
    /**
     * Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.
     */
    stats?: ColumnFamilyStats;
}
