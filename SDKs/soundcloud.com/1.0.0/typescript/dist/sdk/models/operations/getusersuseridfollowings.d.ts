import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdFollowingsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdFollowingsQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetUsersUserIdFollowingsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdFollowingsRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdFollowingsPathParams;
    queryParams: GetUsersUserIdFollowingsQueryParams;
    security: GetUsersUserIdFollowingsSecurity;
}
export declare class GetUsersUserIdFollowingsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getUsersUserIdFollowings200ApplicationJSONOneOf?: any;
}
