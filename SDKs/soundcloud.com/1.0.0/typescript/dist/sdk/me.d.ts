import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Me {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteMeFollowingsUserId - Deletes a user who is followed by the authenticated user.
    **/
    deleteMeFollowingsUserId(req: operations.DeleteMeFollowingsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMeFollowingsUserIdResponse>;
    /**
     * getMe - Returns the authenticated user’s information.
    **/
    getMe(req: operations.GetMeRequest, config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * getMeActivities - Returns the authenticated user's activities.
    **/
    getMeActivities(req: operations.GetMeActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetMeActivitiesResponse>;
    /**
     * getMeActivitiesAllOwn - Recent the authenticated user's activities.
    **/
    getMeActivitiesAllOwn(req: operations.GetMeActivitiesAllOwnRequest, config?: AxiosRequestConfig): Promise<operations.GetMeActivitiesAllOwnResponse>;
    /**
     * getMeActivitiesTracks - Returns the authenticated user's recent track related activities.
    **/
    getMeActivitiesTracks(req: operations.GetMeActivitiesTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetMeActivitiesTracksResponse>;
    /**
     * getMeConnections - Returns a list of the authenticated user's connected social accounts.
    **/
    getMeConnections(req: operations.GetMeConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetMeConnectionsResponse>;
    /**
     * getMeConnectionsConnectionId - Returns the authenticated user's connected social account.
    **/
    getMeConnectionsConnectionId(req: operations.GetMeConnectionsConnectionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMeConnectionsConnectionIdResponse>;
    /**
     * getMeFavoritesIds - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)
    **/
    getMeFavoritesIds(req: operations.GetMeFavoritesIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetMeFavoritesIdsResponse>;
    /**
     * getMeFollowers - Returns a list of users who are following the authenticated user.
    **/
    getMeFollowers(req: operations.GetMeFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetMeFollowersResponse>;
    /**
     * getMeFollowersFollowerId - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)
    **/
    getMeFollowersFollowerId(req: operations.GetMeFollowersFollowerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMeFollowersFollowerIdResponse>;
    /**
     * getMeFollowings - Returns a list of users who are followed by the authenticated user.
    **/
    getMeFollowings(req: operations.GetMeFollowingsRequest, config?: AxiosRequestConfig): Promise<operations.GetMeFollowingsResponse>;
    /**
     * getMeFollowingsTracks - Returns a list of recent tracks from users followed by the authenticated user.
    **/
    getMeFollowingsTracks(req: operations.GetMeFollowingsTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetMeFollowingsTracksResponse>;
    /**
     * getMeFollowingsUserId - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)
    **/
    getMeFollowingsUserId(req: operations.GetMeFollowingsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMeFollowingsUserIdResponse>;
    /**
     * getMeLikesTracks - Returns a list of favorited or liked tracks of the authenticated user.
    **/
    getMeLikesTracks(req: operations.GetMeLikesTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetMeLikesTracksResponse>;
    /**
     * getMePlaylists - Returns user’s playlists (sets).
     *
     * Returns playlist info, playlist tracks and tracks owner info.
    **/
    getMePlaylists(req: operations.GetMePlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.GetMePlaylistsResponse>;
    /**
     * getMePlaylistsPlaylistId - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)
    **/
    getMePlaylistsPlaylistId(req: operations.GetMePlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMePlaylistsPlaylistIdResponse>;
    /**
     * getMeTracks - Returns a list of user's tracks.
    **/
    getMeTracks(req: operations.GetMeTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetMeTracksResponse>;
    /**
     * getMeTracksTrackId - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)
    **/
    getMeTracksTrackId(req: operations.GetMeTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMeTracksTrackIdResponse>;
    /**
     * putMeFollowingsUserId - Follows a user.
    **/
    putMeFollowingsUserId(req: operations.PutMeFollowingsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PutMeFollowingsUserIdResponse>;
}
