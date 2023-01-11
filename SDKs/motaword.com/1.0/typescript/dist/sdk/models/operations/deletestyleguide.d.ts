import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStyleGuidePathParams extends SpeakeasyBase {
    projectId: number;
    styleGuideId: number;
}
export declare class DeleteStyleGuideRequest extends SpeakeasyBase {
    pathParams: DeleteStyleGuidePathParams;
}
export declare class DeleteStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
