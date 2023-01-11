import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUsersUserId - Returns a user.
    **/
    getUsersUserId(req: operations.GetUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdResponse>;
    /**
     * getUsersUserIdComments - Returns a list of user's comments.
    **/
    getUsersUserIdComments(req: operations.GetUsersUserIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdCommentsResponse>;
    /**
     * getUsersUserIdFavorites - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)
    **/
    getUsersUserIdFavorites(req: operations.GetUsersUserIdFavoritesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFavoritesResponse>;
    /**
     * getUsersUserIdFollowers - Returns a list of user’s followers.
     *
     * Returns a list of users that follows (user_id).
    **/
    getUsersUserIdFollowers(req: operations.GetUsersUserIdFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFollowersResponse>;
    /**
     * getUsersUserIdFollowings - Returns a list of user’s followings.
     *
     * Returns list of users that (user_id) follows.
    **/
    getUsersUserIdFollowings(req: operations.GetUsersUserIdFollowingsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFollowingsResponse>;
    /**
     * getUsersUserIdFollowingsFollowingId - Returns a user's following. (use /users/{user_id} instead, to fetch the user details)
     *
     * Returns (following_id) that is followed by (user_id).
    **/
    getUsersUserIdFollowingsFollowingId(req: operations.GetUsersUserIdFollowingsFollowingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFollowingsFollowingIdResponse>;
    /**
     * getUsersUserIdLikesTracks - Returns a list of user's liked tracks.
    **/
    getUsersUserIdLikesTracks(req: operations.GetUsersUserIdLikesTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdLikesTracksResponse>;
    /**
     * getUsersUserIdPlaylists - Returns a list of user's playlists.
    **/
    getUsersUserIdPlaylists(req: operations.GetUsersUserIdPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdPlaylistsResponse>;
    /**
     * getUsersUserIdTracks - Returns a list of user's tracks.
    **/
    getUsersUserIdTracks(req: operations.GetUsersUserIdTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdTracksResponse>;
    /**
     * getUsersUserIdWebProfiles - Returns list of user's links added to their profile (website, facebook, instagram).
    **/
    getUsersUserIdWebProfiles(req: operations.GetUsersUserIdWebProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdWebProfilesResponse>;
}
