import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceVpnBgpRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceVpnBgpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceVpnBgp200ApplicationJSONObject?: Record<string, any>;
}
