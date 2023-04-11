import { SpeakeasyBase } from "../../../internal/utils";
import { FileValidationReport } from "./filevalidationreport";
import { ImportError } from "./importerror";
/**
 * A resource that aggregates errors across import job files.
 */
export declare class ValidationReport extends SpeakeasyBase {
    /**
     * List of errors found in files.
     */
    fileValidations?: FileValidationReport[];
    /**
     * List of job level errors.
     */
    jobErrors?: ImportError[];
}
