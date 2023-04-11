import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFacilitiesByLocationSecurity extends SpeakeasyBase {
    apikey: string;
}
/**
 * Optional facility type search filter
 */
export declare enum GetFacilitiesByLocationTypeEnum {
    Health = "health",
    Cemetery = "cemetery",
    Benefits = "benefits",
    VetCenter = "vet_center"
}
export declare class GetFacilitiesByLocationRequest extends SpeakeasyBase {
    /**
     * Bounding box (longitude, latitude, longitude, latitude) within which facilities will be returned. (WGS84 coordinate reference system)
     */
    bbox?: number[];
    /**
     * List of comma-separated facility IDs to retrieve in a single request. Can be combined with lat and long parameters to retrieve facilities sorted by distance from a location.
     */
    ids?: string[];
    /**
     * Latitude of point to search for facilities, in WGS84 coordinate reference system.
     */
    lat?: number;
    /**
     * Longitude of point to search for facilities, in WGS84 coordinate reference system.
     */
    long?: number;
    /**
     * Optional facility mobile search filter
     */
    mobile?: boolean;
    /**
     * Page of results to return per paginated response.
     */
    page?: number;
    /**
     * Number of results to return per paginated response.
     */
    perPage?: number;
    /**
     * Optional facility service search filter
     */
    services?: string[];
    /**
     * State in which to search for facilities. Except in rare cases, this is two characters.
     */
    state?: string;
    /**
     * Optional facility type search filter
     */
    type?: GetFacilitiesByLocationTypeEnum;
    /**
     * VISN search of matching facilities.
     */
    visn?: number;
    /**
     * Zip code to search for facilities. More detailed zip codes can be passed in, but only the first five digits are used to determine facilities to return.
     */
    zip?: string;
}
export declare class GetFacilitiesByLocationResponse extends SpeakeasyBase {
    /**
     * Requested format unacceptable
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Success
     */
    facilitiesResponse?: shared.FacilitiesResponse;
    /**
     * Missing API token
     */
    genericError?: shared.GenericError;
    /**
     * Success
     */
    geoFacilitiesResponse?: shared.GeoFacilitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
