import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Place {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the place with the given id.
     */
    placeGet(req: operations.PlaceGetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetResponse>;
    /**
     * Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
     *             must be polygonal e.g. a BoroughBoundary.
     */
    placeGetAt(req: operations.PlaceGetAtRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetAtResponse>;
    /**
     * Gets the places that lie within a geographic region. The geographic region of interest can either be specified
     *             by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
     *             its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
     *             Optionally filters on type and can strip properties for a smaller payload.
     */
    placeGetByGeo(req: operations.PlaceGetByGeoRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetByGeoResponse>;
    /**
     * Gets all places of a given type
     */
    placeGetByType(req: operations.PlaceGetByTypeRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetByTypeResponse>;
    /**
     * Gets the place overlay for a given set of co-ordinates and a given width/height.
     */
    placeGetOverlay(req: operations.PlaceGetOverlayRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetOverlayResponse>;
    /**
     * Gets the set of streets associated with a post code.
     */
    placeGetStreetsByPostCode(req: operations.PlaceGetStreetsByPostCodeRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetStreetsByPostCodeResponse>;
    /**
     * Gets a list of all of the available place property categories and keys.
     */
    placeMetaCategories(config?: AxiosRequestConfig): Promise<operations.PlaceMetaCategoriesResponse>;
    /**
     * Gets a list of the available types of Place.
     */
    placeMetaPlaceTypes(config?: AxiosRequestConfig): Promise<operations.PlaceMetaPlaceTypesResponse>;
    /**
     * Gets all places that matches the given query
     */
    placeSearch(req: operations.PlaceSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlaceSearchResponse>;
}
