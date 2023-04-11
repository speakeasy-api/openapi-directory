import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
 */
export declare class LinkedVpnTunnelsInput extends SpeakeasyBase {
    /**
     * A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
     */
    siteToSiteDataTransfer?: boolean;
    /**
     * The URIs of linked VPN tunnel resources.
     */
    uris?: string[];
}
/**
 * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
 */
export declare class LinkedVpnTunnels extends SpeakeasyBase {
    /**
     * A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
     */
    siteToSiteDataTransfer?: boolean;
    /**
     * The URIs of linked VPN tunnel resources.
     */
    uris?: string[];
    /**
     * Output only. The VPC network where these VPN tunnels are located.
     */
    vpcNetwork?: string;
}
