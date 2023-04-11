import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCircuit } from "./nestedcircuit";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";
export declare enum CircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}
export declare class CircuitTermination extends SpeakeasyBase {
    circuit: NestedCircuit;
    id?: number;
    interface?: NestedInterface;
    portSpeed: number;
    ppInfo?: string;
    site: NestedSite;
    termSide: CircuitTerminationTerminationEnum;
    /**
     * Upstream speed, if different from port speed
     */
    upstreamSpeed?: number;
    xconnectId?: string;
}
