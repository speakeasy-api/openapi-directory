import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AirQualityAirQualityGetSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class AirQualityAirQualityGetRequest extends SpeakeasyBase {
    /**
     * Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
     */
    key?: string;
    /**
     * Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
     */
    lat?: string;
    /**
     * Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
     */
    lon?: string;
    /**
     * Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
     */
    placeId?: string;
    /**
     * Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.
     *
     * @remarks
     * The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.
     * Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.
     * The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
     *
     */
    timezone?: string;
}
export declare class AirQualityAirQualityGetResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    airQualityPointData?: shared.AirQualityPointData;
    contentType: string;
    /**
     * Error in passed parameter.
     */
    generalRequestError?: shared.GeneralRequestError;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
