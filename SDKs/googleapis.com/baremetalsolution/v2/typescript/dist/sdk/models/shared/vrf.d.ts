import { SpeakeasyBase } from "../../../internal/utils";
import { QosPolicy } from "./qospolicy";
import { VlanAttachment } from "./vlanattachment";
/**
 * The possible state of VRF.
 */
export declare enum VRFStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED"
}
/**
 * A network VRF.
 */
export declare class Vrf extends SpeakeasyBase {
    /**
     * The name of the VRF.
     */
    name?: string;
    /**
     * QOS policy parameters.
     */
    qosPolicy?: QosPolicy;
    /**
     * The possible state of VRF.
     */
    state?: VRFStateEnum;
    /**
     * The list of VLAN attachments for the VRF.
     */
    vlanAttachments?: VlanAttachment[];
}
