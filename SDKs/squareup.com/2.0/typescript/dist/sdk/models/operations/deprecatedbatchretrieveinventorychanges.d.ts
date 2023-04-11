import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeprecatedBatchRetrieveInventoryChangesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeprecatedBatchRetrieveInventoryChangesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchRetrieveInventoryChangesResponse?: shared.BatchRetrieveInventoryChangesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
