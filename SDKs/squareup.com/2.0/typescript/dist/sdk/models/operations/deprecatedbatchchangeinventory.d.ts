import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeprecatedBatchChangeInventorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeprecatedBatchChangeInventoryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchChangeInventoryResponse?: shared.BatchChangeInventoryResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
