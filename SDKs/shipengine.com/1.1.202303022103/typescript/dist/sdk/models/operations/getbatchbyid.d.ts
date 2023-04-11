import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBatchByIdRequest extends SpeakeasyBase {
    /**
     * Batch ID
     */
    batchId: string;
}
export declare class GetBatchByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getBatchByIdResponseBody?: shared.GetBatchByIdResponseBody;
}
