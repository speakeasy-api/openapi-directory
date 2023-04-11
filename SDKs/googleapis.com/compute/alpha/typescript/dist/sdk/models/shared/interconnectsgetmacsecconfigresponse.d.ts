import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectMacsecConfig } from "./interconnectmacsecconfig";
/**
 * Response for the InterconnectsGetMacsecConfigRequest.
 */
export declare class InterconnectsGetMacsecConfigResponse extends SpeakeasyBase {
    /**
     * end_interface: MixerGetResponseWithEtagBuilder
     */
    etag?: string;
    /**
     * MACsec configuration information for the Interconnect. Contains the generated Connectivity Association Key Name (CKN) and the key (CAK) for this Interconnect.
     */
    result?: InterconnectMacsecConfig;
}
