import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectDiagnosticsARPEntry } from "./interconnectdiagnosticsarpentry";
import { InterconnectDiagnosticsLinkLACPStatus } from "./interconnectdiagnosticslinklacpstatus";
import { InterconnectDiagnosticsLinkOpticalPower } from "./interconnectdiagnosticslinkopticalpower";
/**
 * The operational status of the link.
 */
export declare enum InterconnectDiagnosticsLinkStatusOperationalStatusEnum {
    LinkOperationalStatusDown = "LINK_OPERATIONAL_STATUS_DOWN",
    LinkOperationalStatusUp = "LINK_OPERATIONAL_STATUS_UP"
}
export declare class InterconnectDiagnosticsLinkStatus extends SpeakeasyBase {
    /**
     * A list of InterconnectDiagnostics.ARPEntry objects, describing the ARP neighbor entries seen on this link. This will be empty if the link is bundled
     */
    arpCaches?: InterconnectDiagnosticsARPEntry[];
    /**
     * The unique ID for this link assigned during turn up by Google.
     */
    circuitId?: string;
    /**
     * The Demarc address assigned by Google and provided in the LoA.
     */
    googleDemarc?: string;
    lacpStatus?: InterconnectDiagnosticsLinkLACPStatus;
    /**
     * The operational status of the link.
     */
    operationalStatus?: InterconnectDiagnosticsLinkStatusOperationalStatusEnum;
    receivingOpticalPower?: InterconnectDiagnosticsLinkOpticalPower;
    transmittingOpticalPower?: InterconnectDiagnosticsLinkOpticalPower;
}
