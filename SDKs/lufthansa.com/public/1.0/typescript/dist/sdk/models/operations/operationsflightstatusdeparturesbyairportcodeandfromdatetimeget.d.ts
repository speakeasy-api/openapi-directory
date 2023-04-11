import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Departure airport. 3-letter IATA airport code (e.g. 'HAM')
     */
    airportCode: string;
    /**
     * Start of time range in local time of departure airport (YYYY-MM-DDTHH:mm)
     */
    fromDateTime: string;
    /**
     * Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
     */
    limit?: string;
    /**
     * Number of records skipped. Defaults to 0
     */
    offset?: string;
}
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
