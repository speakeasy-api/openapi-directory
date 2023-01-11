import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdPathParams;
    security: GetUsersUserIdSecurity;
}
export declare class GetUsersUserIdResponse extends SpeakeasyBase {
    completeUser?: shared.CompleteUser;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
