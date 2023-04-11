import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.
 */
export declare class HotTablet extends SpeakeasyBase {
    /**
     * Tablet End Key (inclusive).
     */
    endKey?: string;
    /**
     * Output only. The end time of the hot tablet.
     */
    endTime?: string;
    /**
     * The unique name of the hot tablet. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/hotTablets/[a-zA-Z0-9_-]*`.
     */
    name?: string;
    /**
     * Output only. The average CPU usage spent by a node on this tablet over the start_time to end_time time range. The percentage is the amount of CPU used by the node to serve the tablet, from 0% (tablet was not interacted with) to 100% (the node spent all cycles serving the hot tablet).
     */
    nodeCpuUsagePercent?: number;
    /**
     * Tablet Start Key (inclusive).
     */
    startKey?: string;
    /**
     * Output only. The start time of the hot tablet.
     */
    startTime?: string;
    /**
     * Name of the table that contains the tablet. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`.
     */
    tableName?: string;
}
