import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProcessBatchPathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class ProcessBatchRequest extends SpeakeasyBase {
    pathParams: ProcessBatchPathParams;
    request: shared.ProcessBatchRequestBody;
}
export declare class ProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
