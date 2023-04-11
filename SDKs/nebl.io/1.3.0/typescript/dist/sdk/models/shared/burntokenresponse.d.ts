import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing the tx to burn the token
 */
export declare class BurnTokenResponse extends SpeakeasyBase {
    /**
     * Array of indexes of multisig outputs
     */
    multisigOutputs?: number[];
    /**
     * Array of indexes transfering NTP1 tokens
     */
    ntp1OutputIndexes?: number[];
    /**
     * Unsigned, raw transaction hex of the transaction to burn the token
     */
    txHex?: string;
}
