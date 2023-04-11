import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetYearMonthJsonRequest extends SpeakeasyBase {
    /**
     * The month number (e.g. 1 for January).
     */
    month: number;
    /**
     * The year (e.g. 2016).
     */
    year: number;
}
export declare class GetYearMonthJson200ApplicationJSONResponseMeta extends SpeakeasyBase {
    hits?: number;
    offset?: number;
    time?: number;
}
export declare class GetYearMonthJson200ApplicationJSONResponse extends SpeakeasyBase {
    docs?: shared.Doc[];
    meta?: GetYearMonthJson200ApplicationJSONResponseMeta;
}
/**
 * The docs requested.
 */
export declare class GetYearMonthJson200ApplicationJSON extends SpeakeasyBase {
    response?: GetYearMonthJson200ApplicationJSONResponse;
}
export declare class GetYearMonthJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The docs requested.
     */
    getYearMonthJSON200ApplicationJSONObject?: GetYearMonthJson200ApplicationJSON;
}
