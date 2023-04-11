import { SpeakeasyBase } from "../../../internal/utils";
import { QosPolicy } from "./qospolicy";
/**
 * VLAN attachment details.
 */
export declare class VlanAttachment extends SpeakeasyBase {
    /**
     * Immutable. The identifier of the attachment within vrf.
     */
    id?: string;
    /**
     * Input only. Pairing key.
     */
    pairingKey?: string;
    /**
     * The peer IP of the attachment.
     */
    peerIp?: string;
    /**
     * The peer vlan ID of the attachment.
     */
    peerVlanId?: string;
    /**
     * QOS policy parameters.
     */
    qosPolicy?: QosPolicy;
    /**
     * The router IP of the attachment.
     */
    routerIp?: string;
}
