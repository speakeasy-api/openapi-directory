import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchStackRequest extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchStack200ApplicationJSONObject?: Record<string, any>;
}
