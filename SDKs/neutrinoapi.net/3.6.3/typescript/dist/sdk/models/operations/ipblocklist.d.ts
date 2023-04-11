import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IPBlocklistRequest extends SpeakeasyBase {
    /**
     * An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked
     */
    ip: string;
    /**
     * Include public VPN provider IP addresses. <br><b>NOTE</b>: For more advanced VPN detection including the ability to identify private and stealth VPNs use the <a href="https://www.neutrinoapi.com/api/ip-probe/">IP Probe API</a>
     */
    vpnLookup?: boolean;
}
export declare class IPBlocklistResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    ipBlocklistResponse?: shared.IPBlocklistResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
