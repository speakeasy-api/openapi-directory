import { SpeakeasyBase } from "../../../internal/utils";
import { ImportError } from "./importerror";
import { ImportRowError } from "./importrowerror";
/**
 * A resource that aggregates the validation errors found in an import job file.
 */
export declare class FileValidationReport extends SpeakeasyBase {
    /**
     * List of file level errors.
     */
    fileErrors?: ImportError[];
    /**
     * The name of the file.
     */
    fileName?: string;
    /**
     * Flag indicating that processing was aborted due to maximum number of errors.
     */
    partialReport?: boolean;
    /**
     * Partial list of rows that encountered validation error.
     */
    rowErrors?: ImportRowError[];
}
