import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CancelProjectRequestBody extends SpeakeasyBase {
    reason?: string;
}
export declare class CancelProjectRequest extends SpeakeasyBase {
    pathParams: CancelProjectPathParams;
    request?: CancelProjectRequestBody;
}
export declare class CancelProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
