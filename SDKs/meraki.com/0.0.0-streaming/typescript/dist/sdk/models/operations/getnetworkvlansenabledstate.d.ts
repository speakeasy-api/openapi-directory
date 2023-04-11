import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkVlansEnabledStateRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkVlansEnabledStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkVlansEnabledState200ApplicationJSONObject?: Record<string, any>;
}
