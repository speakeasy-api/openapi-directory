import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchMtuRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchMtuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchMtu200ApplicationJSONObject?: Record<string, any>;
}
