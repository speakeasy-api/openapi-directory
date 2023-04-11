import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing a transaction to broadcast
 */
export declare class SendTxRequest extends SpeakeasyBase {
    /**
     * Signed raw tx hex to broadcast
     */
    rawtx: string;
}
