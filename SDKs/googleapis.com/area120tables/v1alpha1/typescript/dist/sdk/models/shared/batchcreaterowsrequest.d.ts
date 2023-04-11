import { SpeakeasyBase } from "../../../internal/utils";
import { CreateRowRequest } from "./createrowrequest";
/**
 * Request message for TablesService.BatchCreateRows.
 */
export declare class BatchCreateRowsRequest extends SpeakeasyBase {
    /**
     * Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.
     */
    requests?: CreateRowRequest[];
}
