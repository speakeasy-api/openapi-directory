import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteContinuousProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteContinuousProjectRequest extends SpeakeasyBase {
    pathParams: DeleteContinuousProjectPathParams;
}
export declare class DeleteContinuousProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
