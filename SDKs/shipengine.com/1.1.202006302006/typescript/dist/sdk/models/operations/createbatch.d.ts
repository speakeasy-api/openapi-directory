import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBatchRequest extends SpeakeasyBase {
    request: shared.CreateBatchRequestBody;
}
export declare class CreateBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createBatchResponseBody?: shared.CreateBatchResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
