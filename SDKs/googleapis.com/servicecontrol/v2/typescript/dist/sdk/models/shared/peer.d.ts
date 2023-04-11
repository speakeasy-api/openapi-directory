import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
 */
export declare class Peer extends SpeakeasyBase {
    /**
     * The IP address of the peer.
     */
    ip?: string;
    /**
     * The labels associated with the peer.
     */
    labels?: Record<string, string>;
    /**
     * The network port of the peer.
     */
    port?: string;
    /**
     * The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request.
     */
    principal?: string;
    /**
     * The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running.
     */
    regionCode?: string;
}
