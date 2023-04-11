import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV2PerformanceStatsRequest extends SpeakeasyBase {
    /**
     * Your key obtained from https://boggio-analytics.com/fp-api/
     */
    xRapidApiKey?: string;
}
/**
 * Bad request, check response for detailed errors.
 */
export declare class GetApiV2PerformanceStats404ApplicationJSON extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class GetApiV2PerformanceStats200ApplicationJSONDataAccuracy extends SpeakeasyBase {
    last14Days?: number;
    last30Days?: number;
    last7Days?: number;
    yesterday?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJSONDataDetailsLast14Days extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJSONDataDetailsLast30Days extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJSONDataDetailsLast7Days extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJSONDataDetailsYesterday extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJSONDataDetails extends SpeakeasyBase {
    last14Days?: GetApiV2PerformanceStats200ApplicationJSONDataDetailsLast14Days;
    last30Days?: GetApiV2PerformanceStats200ApplicationJSONDataDetailsLast30Days;
    last7Days?: GetApiV2PerformanceStats200ApplicationJSONDataDetailsLast7Days;
    yesterday?: GetApiV2PerformanceStats200ApplicationJSONDataDetailsYesterday;
}
export declare class GetApiV2PerformanceStats200ApplicationJSONData extends SpeakeasyBase {
    accuracy?: GetApiV2PerformanceStats200ApplicationJSONDataAccuracy;
    details?: GetApiV2PerformanceStats200ApplicationJSONDataDetails;
    market?: string;
}
/**
 * Good request, returns object that contains accuracy and other datails about predictions.
 */
export declare class GetApiV2PerformanceStats200ApplicationJSON extends SpeakeasyBase {
    data?: GetApiV2PerformanceStats200ApplicationJSONData;
}
export declare class GetApiV2PerformanceStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Good request, returns object that contains accuracy and other datails about predictions.
     */
    getApiV2PerformanceStats200ApplicationJSONObject?: GetApiV2PerformanceStats200ApplicationJSON;
    /**
     * Bad request, check response for detailed errors.
     */
    getApiV2PerformanceStats404ApplicationJSONObject?: GetApiV2PerformanceStats404ApplicationJSON;
}
