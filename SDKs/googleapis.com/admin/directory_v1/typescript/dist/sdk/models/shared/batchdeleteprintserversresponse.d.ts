import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServerFailureInfo } from "./printserverfailureinfo";
/**
 * Successful response
 */
export declare class BatchDeletePrintServersResponse extends SpeakeasyBase {
    /**
     * A list of update failures.
     */
    failedPrintServers?: PrintServerFailureInfo[];
    /**
     * A list of print server IDs that were successfully deleted.
     */
    printServerIds?: string[];
}
