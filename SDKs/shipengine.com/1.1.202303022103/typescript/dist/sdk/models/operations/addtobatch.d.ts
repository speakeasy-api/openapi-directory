import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddToBatchRequest extends SpeakeasyBase {
    addToBatchRequestBody: shared.AddToBatchRequestBody;
    /**
     * Batch ID
     */
    batchId: string;
}
export declare class AddToBatchResponse extends SpeakeasyBase {
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
