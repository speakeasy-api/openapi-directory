import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBatchPathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class UpdateBatchRequest extends SpeakeasyBase {
    pathParams: UpdateBatchPathParams;
}
export declare class UpdateBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
