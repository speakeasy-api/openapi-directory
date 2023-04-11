import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSsidRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkSsidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSsid200ApplicationJSONObject?: Record<string, any>;
}
