import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficRule } from "./trafficrule";
export declare class NetworkConfiguration extends SpeakeasyBase {
    /**
     * Network emulation parameters.
     */
    downRule?: TrafficRule;
    /**
     * The unique opaque id for this network traffic configuration.
     */
    id?: string;
    /**
     * Network emulation parameters.
     */
    upRule?: TrafficRule;
}
