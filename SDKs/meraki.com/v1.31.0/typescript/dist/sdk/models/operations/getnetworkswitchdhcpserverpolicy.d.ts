import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchDhcpServerPolicyRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchDhcpServerPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject?: Record<string, any>;
}
