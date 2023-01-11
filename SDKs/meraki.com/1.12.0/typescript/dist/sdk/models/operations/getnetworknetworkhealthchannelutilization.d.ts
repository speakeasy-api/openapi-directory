import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkNetworkHealthChannelUtilizationPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkNetworkHealthChannelUtilizationQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    resolution?: number;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkNetworkHealthChannelUtilizationRequest extends SpeakeasyBase {
    pathParams: GetNetworkNetworkHealthChannelUtilizationPathParams;
    queryParams: GetNetworkNetworkHealthChannelUtilizationQueryParams;
}
export declare class GetNetworkNetworkHealthChannelUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getNetworkNetworkHealthChannelUtilization200ApplicationJSONObject?: Record<string, any>;
}
