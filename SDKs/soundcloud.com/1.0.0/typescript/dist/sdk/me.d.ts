import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Own User Endpoints.
 */
export declare class Me {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a user who is followed by the authenticated user.
     */
    deleteMeFollowingsUserId(req: operations.DeleteMeFollowingsUserIdRequest, security: operations.DeleteMeFollowingsUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteMeFollowingsUserIdResponse>;
    /**
     * Returns the authenticated user’s information.
     */
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * Returns the authenticated user's activities.
     */
    getMeActivities(req: operations.GetMeActivitiesRequest, security: operations.GetMeActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeActivitiesResponse>;
    /**
     * Recent the authenticated user's activities.
     */
    getMeActivitiesAllOwn(req: operations.GetMeActivitiesAllOwnRequest, security: operations.GetMeActivitiesAllOwnSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeActivitiesAllOwnResponse>;
    /**
     * Returns the authenticated user's recent track related activities.
     */
    getMeActivitiesTracks(req: operations.GetMeActivitiesTracksRequest, security: operations.GetMeActivitiesTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeActivitiesTracksResponse>;
    /**
     * Returns a list of the authenticated user's connected social accounts.
     */
    getMeConnections(req: operations.GetMeConnectionsRequest, security: operations.GetMeConnectionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeConnectionsResponse>;
    /**
     * Returns the authenticated user's connected social account.
     */
    getMeConnectionsConnectionId(req: operations.GetMeConnectionsConnectionIdRequest, security: operations.GetMeConnectionsConnectionIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeConnectionsConnectionIdResponse>;
    /**
     * Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)
     */
    getMeFavoritesIds(req: operations.GetMeFavoritesIdsRequest, security: operations.GetMeFavoritesIdsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeFavoritesIdsResponse>;
    /**
     * Returns a list of users who are following the authenticated user.
     */
    getMeFollowers(req: operations.GetMeFollowersRequest, security: operations.GetMeFollowersSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeFollowersResponse>;
    /**
     * Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)
     */
    getMeFollowersFollowerId(req: operations.GetMeFollowersFollowerIdRequest, security: operations.GetMeFollowersFollowerIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeFollowersFollowerIdResponse>;
    /**
     * Returns a list of users who are followed by the authenticated user.
     */
    getMeFollowings(req: operations.GetMeFollowingsRequest, security: operations.GetMeFollowingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeFollowingsResponse>;
    /**
     * Returns a list of recent tracks from users followed by the authenticated user.
     */
    getMeFollowingsTracks(req: operations.GetMeFollowingsTracksRequest, security: operations.GetMeFollowingsTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeFollowingsTracksResponse>;
    /**
     * Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)
     */
    getMeFollowingsUserId(req: operations.GetMeFollowingsUserIdRequest, security: operations.GetMeFollowingsUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeFollowingsUserIdResponse>;
    /**
     * Returns a list of favorited or liked tracks of the authenticated user.
     */
    getMeLikesTracks(req: operations.GetMeLikesTracksRequest, security: operations.GetMeLikesTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeLikesTracksResponse>;
    /**
     * Returns user’s playlists (sets).
     *
     * @remarks
     * Returns playlist info, playlist tracks and tracks owner info.
     */
    getMePlaylists(req: operations.GetMePlaylistsRequest, security: operations.GetMePlaylistsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMePlaylistsResponse>;
    /**
     * Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)
     */
    getMePlaylistsPlaylistId(req: operations.GetMePlaylistsPlaylistIdRequest, security: operations.GetMePlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMePlaylistsPlaylistIdResponse>;
    /**
     * Returns a list of user's tracks.
     */
    getMeTracks(req: operations.GetMeTracksRequest, security: operations.GetMeTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeTracksResponse>;
    /**
     * Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)
     */
    getMeTracksTrackId(req: operations.GetMeTracksTrackIdRequest, security: operations.GetMeTracksTrackIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeTracksTrackIdResponse>;
    /**
     * Follows a user.
     */
    putMeFollowingsUserId(req: operations.PutMeFollowingsUserIdRequest, security: operations.PutMeFollowingsUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutMeFollowingsUserIdResponse>;
}
