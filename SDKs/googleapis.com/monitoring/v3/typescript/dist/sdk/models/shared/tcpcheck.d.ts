import { SpeakeasyBase } from "../../../internal/utils";
import { PingConfig } from "./pingconfig";
/**
 * Information required for a TCP Uptime check request.
 */
export declare class TcpCheck extends SpeakeasyBase {
    /**
     * Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
     */
    pingConfig?: PingConfig;
    /**
     * The TCP port on the server against which to run the check. Will be combined with host (specified within the monitored_resource) to construct the full URL. Required.
     */
    port?: number;
}
