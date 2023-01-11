import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitProjectReportsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SubmitProjectReportsRequestBody extends SpeakeasyBase {
    activityType?: string;
    message?: string;
}
export declare class SubmitProjectReportsRequest extends SpeakeasyBase {
    pathParams: SubmitProjectReportsPathParams;
    request?: SubmitProjectReportsRequestBody;
}
export declare class SubmitProjectReportsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
