import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveFromBatchRequest extends SpeakeasyBase {
    /**
     * Batch ID
     */
    batchId: string;
    removeFromBatchRequestBody: shared.RemoveFromBatchRequestBody;
}
export declare class RemoveFromBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successful.
     */
    emptyResponseBody?: string;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
