import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeocodeReverseRequest extends SpeakeasyBase {
    /**
     * The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul>
     */
    languageCode?: string;
    /**
     * The location latitude in decimal degrees format
     */
    latitude: string;
    /**
     * The location longitude in decimal degrees format
     */
    longitude: string;
    /**
     * The zoom level to respond with: <br> <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul>
     */
    zoom?: string;
}
export declare class GeocodeReverseResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    geocodeReverseResponse?: shared.GeocodeReverseResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
