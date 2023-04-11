import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkVlansEnabledStateRequestBody extends SpeakeasyBase {
    /**
     * Boolean indicating whether to enable (true) or disable (false) VLANs for the network
     */
    enabled: boolean;
}
export declare class UpdateNetworkVlansEnabledStateRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkVlansEnabledStateRequestBody;
    networkId: string;
}
export declare class UpdateNetworkVlansEnabledStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkVlansEnabledState200ApplicationJSONObject?: Record<string, any>;
}
