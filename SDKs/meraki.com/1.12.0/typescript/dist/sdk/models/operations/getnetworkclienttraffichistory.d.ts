import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientTrafficHistoryPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientTrafficHistoryQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetNetworkClientTrafficHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientTrafficHistoryPathParams;
    queryParams: GetNetworkClientTrafficHistoryQueryParams;
}
export declare class GetNetworkClientTrafficHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getNetworkClientTrafficHistory200ApplicationJSONObject?: Record<string, any>;
}
