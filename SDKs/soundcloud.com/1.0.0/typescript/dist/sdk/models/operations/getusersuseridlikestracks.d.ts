import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdLikesTracksPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdLikesTracksQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
    linkedPartitioning?: boolean;
}
export declare class GetUsersUserIdLikesTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdLikesTracksRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdLikesTracksPathParams;
    queryParams: GetUsersUserIdLikesTracksQueryParams;
    security: GetUsersUserIdLikesTracksSecurity;
}
export declare class GetUsersUserIdLikesTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getUsersUserIdLikesTracks200ApplicationJSONOneOf?: any;
}
