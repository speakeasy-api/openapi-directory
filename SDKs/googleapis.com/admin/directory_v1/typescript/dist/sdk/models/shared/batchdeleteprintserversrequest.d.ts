import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete multiple existing print servers in a batch.
 */
export declare class BatchDeletePrintServersRequest extends SpeakeasyBase {
    /**
     * A list of print server IDs that should be deleted (max `100` per batch).
     */
    printServerIds?: string[];
}
