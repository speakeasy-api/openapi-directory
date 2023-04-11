import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceFirewallSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceFirewallSettings200ApplicationJSONObject?: Record<string, any>;
}
