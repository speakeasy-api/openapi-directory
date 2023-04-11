import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBatchByExternalIdRequest extends SpeakeasyBase {
    externalBatchId: string;
}
export declare class GetBatchByExternalIdResponse extends SpeakeasyBase {
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
    getBatchByExternalIdResponseBody?: shared.GetBatchByExternalIdResponseBody;
}
