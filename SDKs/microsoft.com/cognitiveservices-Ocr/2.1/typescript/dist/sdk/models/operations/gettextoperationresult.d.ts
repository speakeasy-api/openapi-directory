import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTextOperationResultPathParams extends SpeakeasyBase {
    operationId: string;
}
export declare class GetTextOperationResultRequest extends SpeakeasyBase {
    pathParams: GetTextOperationResultPathParams;
}
export declare class GetTextOperationResultResponse extends SpeakeasyBase {
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    statusCode: number;
    textOperationResult?: shared.TextOperationResult;
}
