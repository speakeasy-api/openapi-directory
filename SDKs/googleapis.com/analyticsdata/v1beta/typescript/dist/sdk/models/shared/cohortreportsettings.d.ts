import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional settings of a cohort report.
 */
export declare class CohortReportSettings extends SpeakeasyBase {
    /**
     * If true, accumulates the result from first touch day to the end day. Not supported in `RunReportRequest`.
     */
    accumulate?: boolean;
}
