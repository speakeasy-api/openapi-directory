import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { V2 } from "./v2";
export declare const ServerList: readonly ["https://ticketmaster.com//www.ticketmaster.com/discovery/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    v2: V2;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * find - Attraction Search
     *
     * Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.
    **/
    find(req: operations.FindRequest, config?: AxiosRequestConfig): Promise<operations.FindResponse>;
    /**
     * get - Get Attraction Details
     *
     * Get details for a specific attraction using the unique identifier for the attraction.
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getGenre - Get Genre Details
     *
     * Get details for a specific genre using its unique identifier.
    **/
    getGenre(req: operations.GetGenreRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreResponse>;
    /**
     * getImages - Get Event Images
     *
     * Get images for a specific event using the unique identifier for the event.
    **/
    getImages(req: operations.GetImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesResponse>;
    /**
     * getSegment - Get Segment Details
     *
     * Get details for a specific segment using its unique identifier.
    **/
    getSegment(req: operations.GetSegmentRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentResponse>;
    /**
     * getSubgenre - Get Sub-Genre Details
     *
     * Get details for a specific sub-genre using its unique identifier.
    **/
    getSubgenre(req: operations.GetSubgenreRequest, config?: AxiosRequestConfig): Promise<operations.GetSubgenreResponse>;
    /**
     * getDiscoveryV2Classifications - Classification Search
     *
     * Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.
    **/
    getDiscoveryV2Classifications(req: operations.GetDiscoveryV2ClassificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2ClassificationsResponse>;
    /**
     * getDiscoveryV2ClassificationsId - Get Classification Details
     *
     * Get details for a specific segment, genre, or sub-genre using its unique identifier.
    **/
    getDiscoveryV2ClassificationsId(req: operations.GetDiscoveryV2ClassificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2ClassificationsIdResponse>;
    /**
     * getDiscoveryV2Events - Event Search
     *
     * Find events and filter your search by location, date, availability, and much more.
    **/
    getDiscoveryV2Events(req: operations.GetDiscoveryV2EventsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2EventsResponse>;
    /**
     * getDiscoveryV2EventsId - Get Event Details
     *
     * Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.
    **/
    getDiscoveryV2EventsId(req: operations.GetDiscoveryV2EventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2EventsIdResponse>;
    /**
     * getDiscoveryV2Venues - Venue Search
     *
     * Find venues and filter your search by name, and much more.
    **/
    getDiscoveryV2Venues(req: operations.GetDiscoveryV2VenuesRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2VenuesResponse>;
    /**
     * getDiscoveryV2VenuesId - Get Venue Details
     *
     * Get details for a specific venue using the unique identifier for the venue.
    **/
    getDiscoveryV2VenuesId(req: operations.GetDiscoveryV2VenuesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2VenuesIdResponse>;
}
