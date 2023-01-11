import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdFollowingsFollowingIdPathParams extends SpeakeasyBase {
    followingId: number;
    userId: number;
}
export declare class GetUsersUserIdFollowingsFollowingIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdFollowingsFollowingIdRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdFollowingsFollowingIdPathParams;
    security: GetUsersUserIdFollowingsFollowingIdSecurity;
}
export declare class GetUsersUserIdFollowingsFollowingIdResponse extends SpeakeasyBase {
    completeUser?: shared.CompleteUser;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
