import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdTracksPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdTracksQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
    linkedPartitioning?: boolean;
}
export declare class GetUsersUserIdTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdTracksRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdTracksPathParams;
    queryParams: GetUsersUserIdTracksQueryParams;
    security: GetUsersUserIdTracksSecurity;
}
export declare class GetUsersUserIdTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getUsersUserIdTracks200ApplicationJSONOneOf?: any;
}
