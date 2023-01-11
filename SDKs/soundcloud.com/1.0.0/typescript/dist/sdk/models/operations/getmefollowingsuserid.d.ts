import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeFollowingsUserIdPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetMeFollowingsUserIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeFollowingsUserIdRequest extends SpeakeasyBase {
    pathParams: GetMeFollowingsUserIdPathParams;
    security: GetMeFollowingsUserIdSecurity;
}
export declare class GetMeFollowingsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    user?: shared.User;
}
