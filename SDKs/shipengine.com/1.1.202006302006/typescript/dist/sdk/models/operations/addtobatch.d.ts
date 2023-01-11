import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddToBatchPathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class AddToBatchRequest extends SpeakeasyBase {
    pathParams: AddToBatchPathParams;
    request: shared.AddToBatchRequestBody;
}
export declare class AddToBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
