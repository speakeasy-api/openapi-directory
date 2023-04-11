import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LocationEndpoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search for places. Complete words required.
     *
     * @remarks
     * ## Search for places
     *
     * You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint.
     * The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.
     *
     * Unlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities,
     * mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance.
     * You can then identify the one you want by coordinates, country, or the administrative area.
     *
     */
    findPlacesFindPlacesGet(req: operations.FindPlacesFindPlacesGetRequest, security: operations.FindPlacesFindPlacesGetSecurity, config?: AxiosRequestConfig): Promise<operations.FindPlacesFindPlacesGetResponse>;
    /**
     * Prefix search for places. Useful for autocomplete forms.
     *
     * @remarks
     * ## Search for places by prefix
     *
     * You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.
     *
     * Unlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.
     *
     */
    findPlacesPrefixFindPlacesPrefixGet(req: operations.FindPlacesPrefixFindPlacesPrefixGetRequest, security: operations.FindPlacesPrefixFindPlacesPrefixGetSecurity, config?: AxiosRequestConfig): Promise<operations.FindPlacesPrefixFindPlacesPrefixGetResponse>;
    /**
     * Returns the nearest named location for a given GPS coordinates.
     *
     * @remarks
     * ## Search for nearest place by coordinates
     *
     * You can use this endpoint to find the nearest place from given coordinates.
     *
     * *Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*
     *
     */
    nearestPlaceNearestPlaceGet(req: operations.NearestPlaceNearestPlaceGetRequest, security: operations.NearestPlaceNearestPlaceGetSecurity, config?: AxiosRequestConfig): Promise<operations.NearestPlaceNearestPlaceGetResponse>;
}
