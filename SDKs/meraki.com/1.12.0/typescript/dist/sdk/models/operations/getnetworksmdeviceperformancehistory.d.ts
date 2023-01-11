import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDevicePerformanceHistoryPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDevicePerformanceHistoryQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetNetworkSmDevicePerformanceHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDevicePerformanceHistoryPathParams;
    queryParams: GetNetworkSmDevicePerformanceHistoryQueryParams;
}
export declare class GetNetworkSmDevicePerformanceHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getNetworkSmDevicePerformanceHistory200ApplicationJSONObject?: Record<string, any>;
}
