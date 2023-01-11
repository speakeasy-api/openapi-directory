import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tracks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTracksTrackId - Deletes a track.
    **/
    deleteTracksTrackId(req: operations.DeleteTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTracksTrackIdResponse>;
    /**
     * getTracksTrackId - Returns a track.
    **/
    getTracksTrackId(req: operations.GetTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdResponse>;
    /**
     * getTracksTrackIdComments - Returns the comments posted on the track(track_id).
    **/
    getTracksTrackIdComments(req: operations.GetTracksTrackIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdCommentsResponse>;
    /**
     * getTracksTrackIdFavoriters - Returns a list of users who have favorited or liked the track.
    **/
    getTracksTrackIdFavoriters(req: operations.GetTracksTrackIdFavoritersRequest, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdFavoritersResponse>;
    /**
     * getTracksTrackIdRelated - Returns all related tracks of track on SoundCloud.
    **/
    getTracksTrackIdRelated(req: operations.GetTracksTrackIdRelatedRequest, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdRelatedResponse>;
    /**
     * getTracksTrackIdReposters - Returns a collection of track's reposters.
    **/
    getTracksTrackIdReposters(req: operations.GetTracksTrackIdRepostersRequest, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdRepostersResponse>;
    /**
     * getTracksTrackIdStreams - Returns a track's streamable URLs
    **/
    getTracksTrackIdStreams(req: operations.GetTracksTrackIdStreamsRequest, config?: AxiosRequestConfig): Promise<operations.GetTracksTrackIdStreamsResponse>;
    /**
     * postTracks - Uploads a new track.
    **/
    postTracks(req: operations.PostTracksRequest, config?: AxiosRequestConfig): Promise<operations.PostTracksResponse>;
    /**
     * postTracksTrackIdComments - Returns the newly created comment on success
    **/
    postTracksTrackIdComments(req: operations.PostTracksTrackIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostTracksTrackIdCommentsResponse>;
    /**
     * putTracksTrackId - Updates a track's information.
    **/
    putTracksTrackId(req: operations.PutTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTracksTrackIdResponse>;
}
