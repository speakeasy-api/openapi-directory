import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing a transaction to broadcast
 */
export declare class BroadcastTxRequest extends SpeakeasyBase {
    /**
     * Signed raw tx hex to broadcast
     */
    txHex: string;
}
