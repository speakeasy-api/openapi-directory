import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Tracks Endpoints.
 */
export declare class Tracks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a track.
     */
    deleteTracksTrackId(req: operations.DeleteTracksTrackIdRequest, security: operations.DeleteTracksTrackIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTracksTrackIdResponse>;
    /**
     * Returns a track.
     */
    getTracksTrackId(req: operations.GetTracksTrackIdRequest, security: operations.GetTracksTrackIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdResponse>;
    /**
     * Returns the comments posted on the track(track_id).
     */
    getTracksTrackIdComments(req: operations.GetTracksTrackIdCommentsRequest, security: operations.GetTracksTrackIdCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdCommentsResponse>;
    /**
     * Returns a list of users who have favorited or liked the track.
     */
    getTracksTrackIdFavoriters(req: operations.GetTracksTrackIdFavoritersRequest, security: operations.GetTracksTrackIdFavoritersSecurity, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdFavoritersResponse>;
    /**
     * Returns all related tracks of track on SoundCloud.
     */
    getTracksTrackIdRelated(req: operations.GetTracksTrackIdRelatedRequest, security: operations.GetTracksTrackIdRelatedSecurity, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdRelatedResponse>;
    /**
     * Returns a collection of track's reposters.
     */
    getTracksTrackIdReposters(req: operations.GetTracksTrackIdRepostersRequest, security: operations.GetTracksTrackIdRepostersSecurity, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdRepostersResponse>;
    /**
     * Returns a track's streamable URLs
     */
    getTracksTrackIdStreams(req: operations.GetTracksTrackIdStreamsRequest, security: operations.GetTracksTrackIdStreamsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdStreamsResponse>;
    /**
     * Uploads a new track.
     */
    postTracks(req: shared.TrackDataRequest, security: operations.PostTracksSecurity, config?: AxiosRequestConfig): Promise<operations.PostTracksResponse>;
    /**
     * Returns the newly created comment on success
     */
    postTracksTrackIdComments(req: operations.PostTracksTrackIdCommentsRequest, security: operations.PostTracksTrackIdCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostTracksTrackIdCommentsResponse>;
    /**
     * Updates a track's information.
     */
    putTracksTrackIdJson(req: operations.PutTracksTrackIdJsonRequest, security: operations.PutTracksTrackIdJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PutTracksTrackIdJsonResponse>;
    /**
     * Updates a track's information.
     */
    putTracksTrackIdMultipart(req: operations.PutTracksTrackIdMultipartRequest, security: operations.PutTracksTrackIdMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PutTracksTrackIdMultipartResponse>;
}
