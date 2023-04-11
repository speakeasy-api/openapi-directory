import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeprecatedBatchRetrieveInventoryCountsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeprecatedBatchRetrieveInventoryCountsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchRetrieveInventoryCountsResponse?: shared.BatchRetrieveInventoryCountsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
