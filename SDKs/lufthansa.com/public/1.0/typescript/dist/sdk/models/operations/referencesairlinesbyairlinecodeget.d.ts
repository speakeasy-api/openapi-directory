import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReferencesAirlinesByAirlineCodeGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class ReferencesAirlinesByAirlineCodeGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * 2-character IATA airline/carrier code
     */
    airlineCode: string;
    /**
     * Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
     */
    limit?: string;
    /**
     * Number of records skipped. Defaults to 0
     */
    offset?: string;
}
export declare class ReferencesAirlinesByAirlineCodeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesAirlinesByAirlineCodeGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
