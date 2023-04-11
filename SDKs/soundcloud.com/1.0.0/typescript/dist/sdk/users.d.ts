import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * SoundCloud Users Endpoints.
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a user.
     */
    getUsersUserId(req: operations.GetUsersUserIdRequest, security: operations.GetUsersUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdResponse>;
    /**
     * Returns a list of user's comments.
     */
    getUsersUserIdComments(req: operations.GetUsersUserIdCommentsRequest, security: operations.GetUsersUserIdCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdCommentsResponse>;
    /**
     * Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)
     */
    getUsersUserIdFavorites(req: operations.GetUsersUserIdFavoritesRequest, security: operations.GetUsersUserIdFavoritesSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFavoritesResponse>;
    /**
     * Returns a list of user’s followers.
     *
     * @remarks
     * Returns a list of users that follows (user_id).
     */
    getUsersUserIdFollowers(req: operations.GetUsersUserIdFollowersRequest, security: operations.GetUsersUserIdFollowersSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFollowersResponse>;
    /**
     * Returns a list of user’s followings.
     *
     * @remarks
     * Returns list of users that (user_id) follows.
     */
    getUsersUserIdFollowings(req: operations.GetUsersUserIdFollowingsRequest, security: operations.GetUsersUserIdFollowingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFollowingsResponse>;
    /**
     * Returns a user's following. (use /users/{user_id} instead, to fetch the user details)
     *
     * @remarks
     * Returns (following_id) that is followed by (user_id).
     */
    getUsersUserIdFollowingsFollowingId(req: operations.GetUsersUserIdFollowingsFollowingIdRequest, security: operations.GetUsersUserIdFollowingsFollowingIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdFollowingsFollowingIdResponse>;
    /**
     * Returns a list of user's liked tracks.
     */
    getUsersUserIdLikesTracks(req: operations.GetUsersUserIdLikesTracksRequest, security: operations.GetUsersUserIdLikesTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdLikesTracksResponse>;
    /**
     * Returns a list of user's playlists.
     */
    getUsersUserIdPlaylists(req: operations.GetUsersUserIdPlaylistsRequest, security: operations.GetUsersUserIdPlaylistsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdPlaylistsResponse>;
    /**
     * Returns a list of user's tracks.
     */
    getUsersUserIdTracks(req: operations.GetUsersUserIdTracksRequest, security: operations.GetUsersUserIdTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdTracksResponse>;
    /**
     * Returns list of user's links added to their profile (website, facebook, instagram).
     */
    getUsersUserIdWebProfiles(req: operations.GetUsersUserIdWebProfilesRequest, security: operations.GetUsersUserIdWebProfilesSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdWebProfilesResponse>;
}
