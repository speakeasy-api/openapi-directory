import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of MACsec encryption on the link.
 */
export declare class InterconnectDiagnosticsMacsecStatus extends SpeakeasyBase {
    /**
     * Indicates the Connectivity Association Key Name (CKN) currently being used if MACsec is operational.
     */
    ckn?: string;
    /**
     * Indicates whether or not MACsec is operational on this link.
     */
    operational?: boolean;
}
