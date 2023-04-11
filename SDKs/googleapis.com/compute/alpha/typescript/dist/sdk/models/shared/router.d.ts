import { SpeakeasyBase } from "../../../internal/utils";
import { RouterBgp } from "./routerbgp";
import { RouterBgpPeer } from "./routerbgppeer";
import { RouterInterface } from "./routerinterface";
import { RouterMd5AuthenticationKey } from "./routermd5authenticationkey";
import { RouterNat } from "./routernat";
/**
 * Represents a Cloud Router resource. For more information about Cloud Router, read the Cloud Router overview.
 */
export declare class Router extends SpeakeasyBase {
    bgp?: RouterBgp;
    /**
     * BGP information that must be configured into the routing stack to establish BGP peering. This information must specify the peer ASN and either the interface name, IP address, or peer IP address. Please refer to RFC4273.
     */
    bgpPeers?: RouterBgpPeer[];
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments).
     */
    encryptedInterconnectRouter?: boolean;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * Router interfaces. Each interface requires either one linked resource, (for example, linkedVpnTunnel), or IP address and IP address range (for example, ipRange), or both.
     */
    interfaces?: RouterInterface[];
    /**
     * [Output Only] Type of resource. Always compute#router for routers.
     */
    kind?: string;
    /**
     * Keys used for MD5 authentication.
     */
    md5AuthenticationKeys?: RouterMd5AuthenticationKey[];
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * A list of NAT services created in this router.
     */
    nats?: RouterNat[];
    /**
     * URI of the network to which this router belongs.
     */
    network?: string;
    /**
     * [Output Only] URI of the region where the router resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
}
