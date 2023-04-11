import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describing the ARP neighbor entries seen on this link
 */
export declare class InterconnectDiagnosticsARPEntry extends SpeakeasyBase {
    /**
     * The IP address of this ARP neighbor.
     */
    ipAddress?: string;
    /**
     * The MAC address of this ARP neighbor.
     */
    macAddress?: string;
}
