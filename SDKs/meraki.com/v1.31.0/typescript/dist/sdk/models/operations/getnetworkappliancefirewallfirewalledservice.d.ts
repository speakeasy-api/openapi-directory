import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceFirewallFirewalledServiceRequest extends SpeakeasyBase {
    networkId: string;
    service: string;
}
export declare class GetNetworkApplianceFirewallFirewalledServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceFirewallFirewalledService200ApplicationJSONObject?: Record<string, any>;
}
