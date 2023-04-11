import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are "blocked" (no remote IPs can access the service), "restricted" (only whitelisted IPs can access the service), and "unrestriced" (any remote IP can access the service). This field is required
 */
export declare enum UpdateNetworkFirewalledServiceRequestBodyAccessEnum {
    Blocked = "blocked",
    Restricted = "restricted",
    Unrestricted = "unrestricted"
}
export declare class UpdateNetworkFirewalledServiceRequestBody extends SpeakeasyBase {
    /**
     * A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are "blocked" (no remote IPs can access the service), "restricted" (only whitelisted IPs can access the service), and "unrestriced" (any remote IP can access the service). This field is required
     */
    access: UpdateNetworkFirewalledServiceRequestBodyAccessEnum;
    /**
     * An array of whitelisted IPs that can access the service. This field is required if "access" is set to "restricted". Otherwise this field is ignored
     */
    allowedIps?: string[];
}
export declare class UpdateNetworkFirewalledServiceRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkFirewalledServiceRequestBody;
    networkId: string;
    service: string;
}
export declare class UpdateNetworkFirewalledServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkFirewalledService200ApplicationJSONObject?: Record<string, any>;
}
