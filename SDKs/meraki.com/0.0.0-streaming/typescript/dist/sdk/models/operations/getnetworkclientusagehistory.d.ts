import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientUsageHistoryRequest extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClientUsageHistory200ApplicationJSONObjects?: Record<string, any>[];
}
