import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCacheRequest extends SpeakeasyBase {
    /**
     * Cache key
     */
    key: string;
}
export declare class DeleteCacheResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Operation status
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
