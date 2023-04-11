import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPeering } from "./networkpeering";
export declare class NetworksAddPeeringRequest extends SpeakeasyBase {
    /**
     * This field will be deprecated soon. Use exchange_subnet_routes in network_peering instead. Indicates whether full mesh connectivity is created and managed automatically between peered networks. Currently this field should always be true since Google Compute Engine will automatically create and manage subnetwork routes between two networks when peering state is ACTIVE.
     */
    autoCreateRoutes?: boolean;
    /**
     * This field will be deprecated soon. Use export_custom_routes in network_peering instead. Whether to export the custom routes to peer network.
     */
    exportCustomRoutes?: boolean;
    /**
     * This field will be deprecated soon. Use import_custom_routes in network_peering instead. Whether to import the custom routes from peer network.
     */
    importCustomRoutes?: boolean;
    /**
     * Name of the peering, which should conform to RFC1035.
     */
    name?: string;
    /**
     * A network peering attached to a network resource. The message includes the peering name, peer network, peering state, and a flag indicating whether Google Compute Engine should automatically create routes for the peering.
     */
    networkPeering?: NetworkPeering;
    /**
     * URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not contain project, it is assumed that the peer network is in the same project as the current network.
     */
    peerNetwork?: string;
}
