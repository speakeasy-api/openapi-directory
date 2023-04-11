import { SpeakeasyBase } from "../../../internal/utils";
import { ImportError } from "./importerror";
import { ValidationReport } from "./validationreport";
/**
 * A resource that reports result of the import job execution.
 */
export declare class ExecutionReport extends SpeakeasyBase {
    /**
     * A resource that aggregates errors across import job files.
     */
    executionErrors?: ValidationReport;
    /**
     * Total number of asset frames reported for the import job.
     */
    framesReported?: number;
    /**
     * List of job-level errors. Deprecated, use the job errors under execution_errors instead.
     */
    jobErrors?: ImportError[];
    /**
     * Total number of rows in the import job.
     */
    totalRowsCount?: number;
}
