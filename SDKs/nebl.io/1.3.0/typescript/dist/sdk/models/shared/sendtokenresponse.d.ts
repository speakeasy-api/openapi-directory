import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing the tx to send the token
 */
export declare class SendTokenResponse extends SpeakeasyBase {
    /**
     * Array of indexes of multisig outputs
     */
    multisigOutputs?: number[];
    /**
     * Array of indexes transfering NTP1 tokens
     */
    ntp1OutputIndexes?: number[];
    /**
     * Unsigned, raw transaction hex of the transaction to send the token
     */
    txHex?: string;
}
