import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchRetrieveInventoryCountsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BatchRetrieveInventoryCountsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchRetrieveInventoryCountsResponse?: shared.BatchRetrieveInventoryCountsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
