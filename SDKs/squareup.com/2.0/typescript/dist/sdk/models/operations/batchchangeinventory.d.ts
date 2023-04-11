import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchChangeInventorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BatchChangeInventoryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchChangeInventoryResponse?: shared.BatchChangeInventoryResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
