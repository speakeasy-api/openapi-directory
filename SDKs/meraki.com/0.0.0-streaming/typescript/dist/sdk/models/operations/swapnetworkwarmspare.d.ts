import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SwapNetworkWarmSpareRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class SwapNetworkWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    swapNetworkWarmSpare200ApplicationJSONObject?: Record<string, any>;
}
