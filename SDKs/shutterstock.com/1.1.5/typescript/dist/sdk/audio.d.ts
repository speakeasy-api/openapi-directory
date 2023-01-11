import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Audio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addTrackCollectionItems - Add audio tracks to collections
     *
     * This endpoint adds one or more tracks to a collection by track IDs.
    **/
    addTrackCollectionItems(req: operations.AddTrackCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.AddTrackCollectionItemsResponse>;
    /**
     * createTrackCollection - Create audio collections
     *
     * This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
    **/
    createTrackCollection(req: operations.CreateTrackCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrackCollectionResponse>;
    /**
     * deleteTrackCollection - Delete audio collections
     *
     * This endpoint deletes a collection.
    **/
    deleteTrackCollection(req: operations.DeleteTrackCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrackCollectionResponse>;
    /**
     * deleteTrackCollectionItems - Remove audio tracks from collections
     *
     * This endpoint removes one or more tracks from a collection.
    **/
    deleteTrackCollectionItems(req: operations.DeleteTrackCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrackCollectionItemsResponse>;
    /**
     * downloadTracks - Download audio tracks
     *
     * This endpoint redownloads tracks that you have already received a license for.
    **/
    downloadTracks(req: operations.DownloadTracksRequest, config?: AxiosRequestConfig): Promise<operations.DownloadTracksResponse>;
    /**
     * getTrack - Get details about audio tracks
     *
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
    **/
    getTrack(req: operations.GetTrackRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackResponse>;
    /**
     * getTrackCollection - Get the details of audio collections
     *
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
    **/
    getTrackCollection(req: operations.GetTrackCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackCollectionResponse>;
    /**
     * getTrackCollectionItems - Get the contents of audio collections
     *
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
    **/
    getTrackCollectionItems(req: operations.GetTrackCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackCollectionItemsResponse>;
    /**
     * getTrackCollectionList - List audio collections
     *
     * This endpoint lists your collections of audio tracks and their basic attributes.
    **/
    getTrackCollectionList(req: operations.GetTrackCollectionListRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackCollectionListResponse>;
    /**
     * getTrackLicenseList - List audio licenses
     *
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
    **/
    getTrackLicenseList(req: operations.GetTrackLicenseListRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackLicenseListResponse>;
    /**
     * getTrackList - List audio tracks
     *
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
    **/
    getTrackList(req: operations.GetTrackListRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackListResponse>;
    /**
     * licenseTrack - License audio tracks
     *
     * This endpoint gets licenses for one or more tracks.
    **/
    licenseTrack(req: operations.LicenseTrackRequest, config?: AxiosRequestConfig): Promise<operations.LicenseTrackResponse>;
    /**
     * listGenres - List audio genres
     *
     * This endpoint returns a list of all audio genres.
    **/
    listGenres(req: operations.ListGenresRequest, config?: AxiosRequestConfig): Promise<operations.ListGenresResponse>;
    /**
     * listInstruments - List audio instruments
     *
     * This endpoint returns a list of all audio instruments.
    **/
    listInstruments(req: operations.ListInstrumentsRequest, config?: AxiosRequestConfig): Promise<operations.ListInstrumentsResponse>;
    /**
     * listMoods - List audio moods
     *
     * This endpoint returns a list of all audio moods.
    **/
    listMoods(req: operations.ListMoodsRequest, config?: AxiosRequestConfig): Promise<operations.ListMoodsResponse>;
    /**
     * renameTrackCollection - Rename audio collections
     *
     * This endpoint sets a new name for a collection.
    **/
    renameTrackCollection(req: operations.RenameTrackCollectionRequest, config?: AxiosRequestConfig): Promise<operations.RenameTrackCollectionResponse>;
    /**
     * searchTracks - Search for tracks
     *
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
    **/
    searchTracks(req: operations.SearchTracksRequest, config?: AxiosRequestConfig): Promise<operations.SearchTracksResponse>;
}
