import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
 */
export declare class ProxyInfo extends SpeakeasyBase {
    /**
     * For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com.
     */
    excludedHosts?: string[];
    /**
     * The host of the direct proxy.
     */
    host?: string;
    /**
     * The URI of the PAC script used to configure the proxy.
     */
    pacUri?: string;
    /**
     * The port of the direct proxy.
     */
    port?: number;
}
