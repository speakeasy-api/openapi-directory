import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceReport } from "./performancereport";
/**
 * The configuration data for an Ad Exchange performance report list.
 */
export declare class PerformanceReportList extends SpeakeasyBase {
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * A list of performance reports relevant for the account.
     */
    performanceReport?: PerformanceReport[];
}
