import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for TablesService.BatchDeleteRows
 */
export declare class BatchDeleteRowsRequest extends SpeakeasyBase {
    /**
     * Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row}
     */
    names?: string[];
}
