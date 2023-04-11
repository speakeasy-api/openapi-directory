import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SwapNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class SwapNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    swapNetworkApplianceWarmSpare200ApplicationJSONObject?: Record<string, any>;
}
