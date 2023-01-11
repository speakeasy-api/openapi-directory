import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuspendUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class SuspendUserRequestBody extends SpeakeasyBase {
    reason?: string;
}
export declare class SuspendUserSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class SuspendUserRequest extends SpeakeasyBase {
    pathParams: SuspendUserPathParams;
    request?: SuspendUserRequestBody;
    security: SuspendUserSecurity;
}
export declare class SuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
