import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReadOperationResultPathParams extends SpeakeasyBase {
    operationId: string;
}
export declare class GetReadOperationResultRequest extends SpeakeasyBase {
    pathParams: GetReadOperationResultPathParams;
}
export declare class GetReadOperationResultResponse extends SpeakeasyBase {
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    readOperationResult?: shared.ReadOperationResult;
    statusCode: number;
}
