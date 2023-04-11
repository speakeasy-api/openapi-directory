import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPeering } from "./networkpeering";
export declare class NetworksUpdatePeeringRequest extends SpeakeasyBase {
    /**
     * A network peering attached to a network resource. The message includes the peering name, peer network, peering state, and a flag indicating whether Google Compute Engine should automatically create routes for the peering.
     */
    networkPeering?: NetworkPeering;
}
