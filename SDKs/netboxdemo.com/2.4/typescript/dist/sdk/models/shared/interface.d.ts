import { SpeakeasyBase } from "../../../internal/utils";
import { InterfaceCircuitTermination } from "./interfacecircuittermination";
import { InterfaceVLAN } from "./interfacevlan";
import { NestedDevice } from "./nesteddevice";
import { NestedInterface } from "./nestedinterface";
export declare class InterfaceFormFactor extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class InterfaceMode extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Interface extends SpeakeasyBase {
    circuitTermination?: InterfaceCircuitTermination;
    description?: string;
    device: NestedDevice;
    enabled?: boolean;
    formFactor?: InterfaceFormFactor;
    id?: number;
    interfaceConnection?: string;
    isConnected?: string;
    lag?: NestedInterface;
    macAddress?: string;
    /**
     * This interface is used only for out-of-band management
     */
    mgmtOnly?: boolean;
    mode?: InterfaceMode;
    mtu?: number;
    name: string;
    taggedVlans?: InterfaceVLAN[];
    tags?: string[];
    untaggedVlan?: InterfaceVLAN;
}
