import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateRowRequest } from "./updaterowrequest";
/**
 * Request message for TablesService.BatchUpdateRows.
 */
export declare class BatchUpdateRowsRequest extends SpeakeasyBase {
    /**
     * Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.
     */
    requests?: UpdateRowRequest[];
}
