import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Destination airport. 3-letter IATA airport code (e.g. 'FRA')
     */
    destination: string;
    /**
     * Show only direct flights (false=0, true=1). Default is false
     */
    directFlights?: boolean;
    /**
     * Local departure date and optionally departure time (YYYY-MM-DD or YYYY-MM-DDTHH:mm). When not provided, time is assumed to be 00:01
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
    /**
     * Departure airport. 3-letter IATA airport code (e.g. 'ZRH')
     */
    origin: string;
}
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
