import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeFollowersFollowerIdPathParams extends SpeakeasyBase {
    followerId: number;
}
export declare class GetMeFollowersFollowerIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeFollowersFollowerIdRequest extends SpeakeasyBase {
    pathParams: GetMeFollowersFollowerIdPathParams;
    security: GetMeFollowersFollowerIdSecurity;
}
export declare class GetMeFollowersFollowerIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    user?: shared.User;
}
