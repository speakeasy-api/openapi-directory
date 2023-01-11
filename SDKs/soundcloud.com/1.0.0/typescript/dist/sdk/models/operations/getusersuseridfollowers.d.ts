import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdFollowersPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdFollowersQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetUsersUserIdFollowersSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdFollowersRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdFollowersPathParams;
    queryParams: GetUsersUserIdFollowersQueryParams;
    security: GetUsersUserIdFollowersSecurity;
}
export declare class GetUsersUserIdFollowersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getUsersUserIdFollowers200ApplicationJSONOneOf?: any;
}
