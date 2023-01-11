import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBatchPathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class DeleteBatchRequest extends SpeakeasyBase {
    pathParams: DeleteBatchPathParams;
}
export declare class DeleteBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
