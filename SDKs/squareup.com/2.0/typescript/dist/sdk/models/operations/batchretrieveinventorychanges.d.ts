import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchRetrieveInventoryChangesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BatchRetrieveInventoryChangesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchRetrieveInventoryChangesResponse?: shared.BatchRetrieveInventoryChangesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
