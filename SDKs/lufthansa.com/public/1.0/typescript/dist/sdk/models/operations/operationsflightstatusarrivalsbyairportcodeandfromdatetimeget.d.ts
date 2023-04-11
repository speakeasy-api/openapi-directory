import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * 3-letter IATA aiport code (e.g. 'ZRH')
     */
    airportCode: string;
    /**
     * Start of time range in local time of arrival airport (YYYY-MM-DDTHH:mm)
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
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
