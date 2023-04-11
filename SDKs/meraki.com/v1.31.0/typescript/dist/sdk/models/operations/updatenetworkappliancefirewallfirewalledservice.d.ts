import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are "blocked" (no remote IPs can access the service), "restricted" (only allowed IPs can access the service), and "unrestriced" (any remote IP can access the service). This field is required
 */
export declare enum UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum {
    Blocked = "blocked",
    Restricted = "restricted",
    Unrestricted = "unrestricted"
}
export declare class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody extends SpeakeasyBase {
    /**
     * A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are "blocked" (no remote IPs can access the service), "restricted" (only allowed IPs can access the service), and "unrestriced" (any remote IP can access the service). This field is required
     */
    access: UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;
    /**
     * An array of allowed IPs that can access the service. This field is required if "access" is set to "restricted". Otherwise this field is ignored
     */
    allowedIps?: string[];
}
export declare class UpdateNetworkApplianceFirewallFirewalledServiceRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
    networkId: string;
    service: string;
}
export declare class UpdateNetworkApplianceFirewallFirewalledServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject?: Record<string, any>;
}
