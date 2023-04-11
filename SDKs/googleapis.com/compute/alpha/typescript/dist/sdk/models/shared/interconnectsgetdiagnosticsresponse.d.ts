import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectDiagnostics } from "./interconnectdiagnostics";
/**
 * Response for the InterconnectsGetDiagnosticsRequest.
 */
export declare class InterconnectsGetDiagnosticsResponse extends SpeakeasyBase {
    /**
     * Diagnostics information about interconnect, contains detailed and current technical information about Google's side of the connection.
     */
    result?: InterconnectDiagnostics;
}
