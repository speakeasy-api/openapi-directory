import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Load balancing specific fields for network endpoint group.
 */
export declare class NetworkEndpointGroupLbNetworkEndpointGroup extends SpeakeasyBase {
    /**
     * The default port used if the port number is not specified in the network endpoint. [Deprecated] This field is deprecated.
     */
    defaultPort?: number;
    /**
     * The URL of the network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified. [Deprecated] This field is deprecated.
     */
    network?: string;
    /**
     * Optional URL of the subnetwork to which all network endpoints in the NEG belong. [Deprecated] This field is deprecated.
     */
    subnetwork?: string;
    /**
     * [Output Only] The URL of the zone where the network endpoint group is located. [Deprecated] This field is deprecated.
     */
    zone?: string;
}
