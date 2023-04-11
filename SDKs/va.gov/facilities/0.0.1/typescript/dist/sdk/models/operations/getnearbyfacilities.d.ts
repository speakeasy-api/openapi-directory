import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNearbyFacilitiesSecurity extends SpeakeasyBase {
    apikey: string;
}
/**
 * Filter to only include facilities that are within the specified number of drive time minutes from the requested location.
 */
export declare enum GetNearbyFacilitiesDriveTimeEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40",
    Fifty = "50",
    Sixty = "60",
    Seventy = "70",
    Eighty = "80",
    Ninety = "90"
}
export declare class GetNearbyFacilitiesRequest extends SpeakeasyBase {
    /**
     * City of the location from which drive time will be calculated.
     */
    city?: string;
    /**
     * Filter to only include facilities that are within the specified number of drive time minutes from the requested location.
     */
    driveTime?: GetNearbyFacilitiesDriveTimeEnum;
    /**
     * Latitude of the location from which drive time will be calculated.
     */
    lat?: number;
    /**
     * Longitude of the location from which drive time will be calculated.
     */
    lng?: number;
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
     * Two character state code of the location from which drive time will be calculated.
     */
    state?: string;
    /**
     * Street address of the location from which drive time will be calculated.
     */
    streetAddress?: string;
    /**
     * Zip code of the location from which drive time will be calculated.
     */
    zip?: string;
}
export declare class GetNearbyFacilitiesResponse extends SpeakeasyBase {
    /**
     * Requested format unacceptable
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Missing Required Or Ambiguous Parameters
     */
    genericError?: shared.GenericError;
    /**
     * Success
     */
    nearbyResponse?: shared.NearbyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
