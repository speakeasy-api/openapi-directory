import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReferencesAirportsByAirportCodeGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class ReferencesAirportsByAirportCodeGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Restrict the results to locations with flights operated by LH (false=0, true=1)
     */
    lHoperated?: boolean;
    /**
     * 3-letter IATA airport code
     */
    airportCode: string;
    /**
     * 2-letter ISO 3166-1 language code
     */
    lang?: string;
    /**
     * Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
     */
    limit?: string;
    /**
     * Number of records skipped. Defaults to 0
     */
    offset?: string;
}
export declare class ReferencesAirportsByAirportCodeGetResponse extends SpeakeasyBase {
    airportResponse?: shared.AirportResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
