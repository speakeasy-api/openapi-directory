import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
import { RouterStatusBgpPeerStatus } from "./routerstatusbgppeerstatus";
import { RouterStatusNatStatus } from "./routerstatusnatstatus";
export declare class RouterStatus extends SpeakeasyBase {
    /**
     * Best routes for this router's network.
     */
    bestRoutes?: Route[];
    /**
     * Best routes learned by this router.
     */
    bestRoutesForRouter?: Route[];
    bgpPeerStatus?: RouterStatusBgpPeerStatus[];
    natStatus?: RouterStatusNatStatus[];
    /**
     * URI of the network to which this router belongs.
     */
    network?: string;
}
