import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBatchByIdPathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class GetBatchByIdRequest extends SpeakeasyBase {
    pathParams: GetBatchByIdPathParams;
}
export declare class GetBatchByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getBatchByIdResponseBody?: shared.GetBatchByIdResponseBody;
}
