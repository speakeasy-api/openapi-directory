import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddressUtxosResponse extends SpeakeasyBase {
    /**
     * Address
     */
    address?: string;
    /**
     * NEBL amount
     */
    amount?: number;
    /**
     * Number of confirmations
     */
    confirmations?: number;
    /**
     * scriptPubKey
     */
    scriptPubKey?: string;
    /**
     * Timestamp
     */
    ts?: number;
    /**
     * Transaction ID
     */
    txid?: string;
    /**
     * vout
     */
    vout?: number;
}
