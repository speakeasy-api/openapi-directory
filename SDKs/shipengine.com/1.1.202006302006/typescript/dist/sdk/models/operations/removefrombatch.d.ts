import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveFromBatchPathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class RemoveFromBatchRequest extends SpeakeasyBase {
    pathParams: RemoveFromBatchPathParams;
    request: shared.RemoveFromBatchRequestBody;
}
export declare class RemoveFromBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
