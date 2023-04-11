import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCableInput } from "./nestedcable";
export declare enum WritableCircuitTerminationConnectionStatusEnum {
    False = "false",
    True = "true"
}
export declare enum WritableCircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}
export declare class WritableCircuitTerminationInput extends SpeakeasyBase {
    cable?: NestedCableInput;
    circuit: number;
    connectionStatus?: WritableCircuitTerminationConnectionStatusEnum;
    description?: string;
    portSpeed: number;
    ppInfo?: string;
    site: number;
    termSide: WritableCircuitTerminationTerminationEnum;
    /**
     * Upstream speed, if different from port speed
     */
    upstreamSpeed?: number;
    xconnectId?: string;
}
