import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Departure date (YYYY-MM-DD) in local time of departure airport
     */
    date: string;
    /**
     * 3-letter IATA airport code (e.g. 'JFK')
     */
    destination: string;
    /**
     * Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
     */
    limit?: string;
    /**
     * Number of records skipped. Defaults to 0
     */
    offset?: string;
    /**
     * 3-letter IATA airport (e.g. 'FRA')
     */
    origin: string;
}
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
