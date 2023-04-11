import { SpeakeasyBase } from "../../../internal/utils";
import { VmEndpointNatMappingsInterfaceNatMappings } from "./vmendpointnatmappingsinterfacenatmappings";
/**
 * Contain information of Nat mapping for a VM endpoint (i.e., NIC).
 */
export declare class VmEndpointNatMappings extends SpeakeasyBase {
    /**
     * Name of the VM instance which the endpoint belongs to
     */
    instanceName?: string;
    interfaceNatMappings?: VmEndpointNatMappingsInterfaceNatMappings[];
}
