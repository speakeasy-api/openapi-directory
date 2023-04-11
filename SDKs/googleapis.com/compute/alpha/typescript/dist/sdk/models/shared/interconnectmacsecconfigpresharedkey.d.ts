import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a pre-shared key used to setup MACsec in static connectivity association key (CAK) mode.
 */
export declare class InterconnectMacsecConfigPreSharedKey extends SpeakeasyBase {
    /**
     * An auto-generated Connectivity Association Key (CAK) for this key.
     */
    cak?: string;
    /**
     * An auto-generated Connectivity Association Key Name (CKN) for this key.
     */
    ckn?: string;
    /**
     * User provided name for this pre-shared key.
     */
    name?: string;
    /**
     * User provided timestamp on or after which this key is valid.
     */
    startTime?: string;
}
