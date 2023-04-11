import * as operations from "./models/operations";
import { V2 } from "./v2";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["//www.ticketmaster.com/discovery/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Ticketmaster Discovery API allows you to search for events, attractions, or venues.
 */
export declare class SDK {
    v2: V2;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Attraction Search
     *
     * @remarks
     * Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.
     */
    find(req: operations.FindRequest, config?: AxiosRequestConfig): Promise<operations.FindResponse>;
    /**
     * Get Attraction Details
     *
     * @remarks
     * Get details for a specific attraction using the unique identifier for the attraction.
     */
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Get Genre Details
     *
     * @remarks
     * Get details for a specific genre using its unique identifier.
     */
    getGenre(req: operations.GetGenreRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreResponse>;
    /**
     * Get Event Images
     *
     * @remarks
     * Get images for a specific event using the unique identifier for the event.
     */
    getImages(req: operations.GetImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesResponse>;
    /**
     * Get Segment Details
     *
     * @remarks
     * Get details for a specific segment using its unique identifier.
     */
    getSegment(req: operations.GetSegmentRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentResponse>;
    /**
     * Get Sub-Genre Details
     *
     * @remarks
     * Get details for a specific sub-genre using its unique identifier.
     */
    getSubgenre(req: operations.GetSubgenreRequest, config?: AxiosRequestConfig): Promise<operations.GetSubgenreResponse>;
    /**
     * Classification Search
     *
     * @remarks
     * Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.
     */
    getDiscoveryV2Classifications(req: operations.GetDiscoveryV2ClassificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2ClassificationsResponse>;
    /**
     * Get Classification Details
     *
     * @remarks
     * Get details for a specific segment, genre, or sub-genre using its unique identifier.
     */
    getDiscoveryV2ClassificationsId(req: operations.GetDiscoveryV2ClassificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2ClassificationsIdResponse>;
    /**
     * Event Search
     *
     * @remarks
     * Find events and filter your search by location, date, availability, and much more.
     */
    getDiscoveryV2Events(req: operations.GetDiscoveryV2EventsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2EventsResponse>;
    /**
     * Get Event Details
     *
     * @remarks
     * Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.
     */
    getDiscoveryV2EventsId(req: operations.GetDiscoveryV2EventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2EventsIdResponse>;
    /**
     * Venue Search
     *
     * @remarks
     * Find venues and filter your search by name, and much more.
     */
    getDiscoveryV2Venues(req: operations.GetDiscoveryV2VenuesRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2VenuesResponse>;
    /**
     * Get Venue Details
     *
     * @remarks
     * Get details for a specific venue using the unique identifier for the venue.
     */
    getDiscoveryV2VenuesId(req: operations.GetDiscoveryV2VenuesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2VenuesIdResponse>;
}
