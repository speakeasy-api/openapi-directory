import { SpeakeasyBase } from "../../../internal/utils";
import { ImportError } from "./importerror";
/**
 * A resource that reports the import job errors at row level.
 */
export declare class ImportRowError extends SpeakeasyBase {
    /**
     * The list of errors detected in the row.
     */
    errors?: ImportError[];
    /**
     * The row number where the error was detected.
     */
    rowNumber?: number;
    /**
     * The name of the VM in the row.
     */
    vmName?: string;
    /**
     * The VM UUID.
     */
    vmUuid?: string;
}
