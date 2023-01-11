import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdFavoritesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdFavoritesQueryParams extends SpeakeasyBase {
    limit?: number;
    linkedPartitioning?: boolean;
}
export declare class GetUsersUserIdFavoritesSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdFavoritesRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdFavoritesPathParams;
    queryParams: GetUsersUserIdFavoritesQueryParams;
    security: GetUsersUserIdFavoritesSecurity;
}
export declare class GetUsersUserIdFavoritesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getUsersUserIdFavorites200ApplicationJSONOneOf?: any;
}
