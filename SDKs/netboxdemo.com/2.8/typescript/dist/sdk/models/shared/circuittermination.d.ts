import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedCircuit } from "./nestedcircuit";
import { NestedSite } from "./nestedsite";
export declare enum CircuitTerminationConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}
export declare enum CircuitTerminationConnectionStatusValueEnum {
    False = "false",
    True = "true"
}
export declare class CircuitTerminationConnectionStatus extends SpeakeasyBase {
    label: CircuitTerminationConnectionStatusLabelEnum;
    value: CircuitTerminationConnectionStatusValueEnum;
}
export declare enum CircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}
export declare class CircuitTermination extends SpeakeasyBase {
    cable?: NestedCable;
    circuit: NestedCircuit;
    /**
     *
     * @remarks
     * Return the appropriate serializer for the type of connected object.
     *
     */
    connectedEndpoint?: Record<string, string>;
    connectedEndpointType?: string;
    connectionStatus?: CircuitTerminationConnectionStatus;
    description?: string;
    id?: number;
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
