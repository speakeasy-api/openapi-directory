import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchRetrieveOrdersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BatchRetrieveOrdersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchRetrieveOrdersResponse?: shared.BatchRetrieveOrdersResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
