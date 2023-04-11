import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Audio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add audio tracks to collections
     *
     * @remarks
     * This endpoint adds one or more tracks to a collection by track IDs.
     */
    addTrackCollectionItems(req: operations.AddTrackCollectionItemsRequest, security: operations.AddTrackCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.AddTrackCollectionItemsResponse>;
    /**
     * Create audio collections
     *
     * @remarks
     * This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
     */
    createTrackCollection(req: shared.CollectionCreateRequest, security: operations.CreateTrackCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTrackCollectionResponse>;
    /**
     * Delete audio collections
     *
     * @remarks
     * This endpoint deletes a collection.
     */
    deleteTrackCollection(req: operations.DeleteTrackCollectionRequest, security: operations.DeleteTrackCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTrackCollectionResponse>;
    /**
     * Remove audio tracks from collections
     *
     * @remarks
     * This endpoint removes one or more tracks from a collection.
     */
    deleteTrackCollectionItems(req: operations.DeleteTrackCollectionItemsRequest, security: operations.DeleteTrackCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTrackCollectionItemsResponse>;
    /**
     * Download audio tracks
     *
     * @remarks
     * This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.
     */
    downloadTracks(req: operations.DownloadTracksRequest, security: operations.DownloadTracksSecurity, config?: AxiosRequestConfig): Promise<operations.DownloadTracksResponse>;
    /**
     * Get details about audio tracks
     *
     * @remarks
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
     */
    getTrack(req: operations.GetTrackRequest, security: operations.GetTrackSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrackResponse>;
    /**
     * Get the details of audio collections
     *
     * @remarks
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
     */
    getTrackCollection(req: operations.GetTrackCollectionRequest, security: operations.GetTrackCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrackCollectionResponse>;
    /**
     * Get the contents of audio collections
     *
     * @remarks
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
     */
    getTrackCollectionItems(req: operations.GetTrackCollectionItemsRequest, security: operations.GetTrackCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrackCollectionItemsResponse>;
    /**
     * List audio collections
     *
     * @remarks
     * This endpoint lists your collections of audio tracks and their basic attributes.
     */
    getTrackCollectionList(req: operations.GetTrackCollectionListRequest, security: operations.GetTrackCollectionListSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrackCollectionListResponse>;
    /**
     * List audio licenses
     *
     * @remarks
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
     */
    getTrackLicenseList(req: operations.GetTrackLicenseListRequest, security: operations.GetTrackLicenseListSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrackLicenseListResponse>;
    /**
     * List audio tracks
     *
     * @remarks
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
     */
    getTrackList(req: operations.GetTrackListRequest, security: operations.GetTrackListSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrackListResponse>;
    /**
     * License audio tracks
     *
     * @remarks
     * This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.
     */
    licenseTrack(req: operations.LicenseTrackRequest, security: operations.LicenseTrackSecurity, config?: AxiosRequestConfig): Promise<operations.LicenseTrackResponse>;
    /**
     * List audio genres
     *
     * @remarks
     * This endpoint returns a list of all audio genres.
     */
    listGenres(req: operations.ListGenresRequest, security: operations.ListGenresSecurity, config?: AxiosRequestConfig): Promise<operations.ListGenresResponse>;
    /**
     * List audio instruments
     *
     * @remarks
     * This endpoint returns a list of all audio instruments.
     */
    listInstruments(req: operations.ListInstrumentsRequest, security: operations.ListInstrumentsSecurity, config?: AxiosRequestConfig): Promise<operations.ListInstrumentsResponse>;
    /**
     * List audio moods
     *
     * @remarks
     * This endpoint returns a list of all audio moods.
     */
    listMoods(req: operations.ListMoodsRequest, security: operations.ListMoodsSecurity, config?: AxiosRequestConfig): Promise<operations.ListMoodsResponse>;
    /**
     * Rename audio collections
     *
     * @remarks
     * This endpoint sets a new name for a collection.
     */
    renameTrackCollection(req: operations.RenameTrackCollectionRequest, security: operations.RenameTrackCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.RenameTrackCollectionResponse>;
    /**
     * Search for tracks
     *
     * @remarks
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
     */
    searchTracks(req: operations.SearchTracksRequest, security: operations.SearchTracksSecurity, config?: AxiosRequestConfig): Promise<operations.SearchTracksResponse>;
}
