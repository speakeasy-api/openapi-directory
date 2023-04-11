import { SpeakeasyBase } from "../../../internal/utils";
export declare class PacketMirroringForwardingRuleInfo extends SpeakeasyBase {
    /**
     * [Output Only] Unique identifier for the forwarding rule; defined by the server.
     */
    canonicalUrl?: string;
    /**
     * Resource URL to the forwarding rule representing the ILB configured as destination of the mirrored traffic.
     */
    url?: string;
}
