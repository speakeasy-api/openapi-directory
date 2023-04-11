import { SpeakeasyBase } from "../../../internal/utils";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";
export declare class CircuitCircuitTermination extends SpeakeasyBase {
    connectedEndpoint: NestedInterface;
    id?: number;
    portSpeed: number;
    site: NestedSite;
    /**
     * Upstream speed, if different from port speed
     */
    upstreamSpeed?: number;
    url?: string;
    xconnectId?: string;
}
