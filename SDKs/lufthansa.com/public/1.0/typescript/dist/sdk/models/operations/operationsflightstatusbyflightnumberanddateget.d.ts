import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OperationsFlightstatusByFlightNumberAndDateGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OperationsFlightstatusByFlightNumberAndDateGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * The departure date (YYYY-MM-DD) in the local time of the departure airport
     */
    date: string;
    /**
     * Flight number including carrier code and any suffix (e.g. 'LH400')
     */
    flightNumber: string;
    /**
     * Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
     */
    limit?: string;
    /**
     * Number of records skipped. Defaults to 0
     */
    offset?: string;
}
export declare class OperationsFlightstatusByFlightNumberAndDateGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
