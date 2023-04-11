import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProcessBatchRequest extends SpeakeasyBase {
    /**
     * Batch ID
     */
    batchId: string;
    processBatchRequestBody: shared.ProcessBatchRequestBody;
}
export declare class ProcessBatchResponse extends SpeakeasyBase {
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
