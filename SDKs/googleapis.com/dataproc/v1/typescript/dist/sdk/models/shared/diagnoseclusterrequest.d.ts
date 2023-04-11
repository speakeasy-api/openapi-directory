import { SpeakeasyBase } from "../../../internal/utils";
import { Interval } from "./interval";
/**
 * A request to collect cluster diagnostic information.
 */
export declare class DiagnoseClusterRequest extends SpeakeasyBase {
    /**
     * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
     */
    diagnosisInterval?: Interval;
    /**
     * Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}
     */
    job?: string;
    /**
     * Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}
     */
    jobs?: string[];
    /**
     * Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed.
     */
    yarnApplicationId?: string;
    /**
     * Optional. Specifies a list of yarn applications on which diagnosis is to be performed.
     */
    yarnApplicationIds?: string[];
}
