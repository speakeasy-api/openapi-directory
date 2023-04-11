import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientPolicyRequest extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClientPolicy200ApplicationJSONObject?: Record<string, any>;
}
