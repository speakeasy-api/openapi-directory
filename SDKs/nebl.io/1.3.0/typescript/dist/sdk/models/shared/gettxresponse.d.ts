import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTxResponseVinScriptSig extends SpeakeasyBase {
    asm?: string;
    hex?: string;
}
export declare class GetTxResponseVin extends SpeakeasyBase {
    /**
     * input index
     */
    n?: number;
    scriptSig?: GetTxResponseVinScriptSig;
    sequence?: number;
    /**
     * TXID of the input
     */
    txid?: string;
    /**
     * Value of input in NEBL
     */
    value?: number;
    /**
     * Value of input in NEBL satoshi
     */
    valueSat?: number;
    /**
     * output index
     */
    vout?: number;
}
export declare class GetTxResponseVoutScriptPubKey extends SpeakeasyBase {
    addresses?: string[];
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type?: string;
}
export declare class GetTxResponseVout extends SpeakeasyBase {
    /**
     * Blockheight of this transaction
     */
    blockheight?: number;
    /**
     * Output index
     */
    n?: number;
    scriptPubKey?: GetTxResponseVoutScriptPubKey;
    /**
     * Whether this output has now been used
     */
    used?: boolean;
    /**
     * Blockheight this output was used in
     */
    usedBlockheight?: number;
    /**
     * TXID this output was used in
     */
    usedTxid?: string;
    /**
     * Value of the output in NEBL
     */
    value?: number;
}
/**
 * Object containing transaction info
 */
export declare class GetTxResponse extends SpeakeasyBase {
    /**
     * Hash of the block this transaction is in
     */
    blockhash?: string;
    /**
     * Block height of this transaction
     */
    blockheight?: number;
    /**
     * Block time of this transaction
     */
    blocktime?: number;
    /**
     * Number of transaction confirmations
     */
    confirmations?: number;
    /**
     * Total NEBL used as fee for this transcation in satoshis
     */
    fee?: number;
    /**
     * Total NEBL used in fees for this transaction
     */
    fees?: number;
    /**
     * Transaction locktime
     */
    locktime?: number;
    /**
     * Transcation size in bytes
     */
    size?: number;
    /**
     * Transaction time
     */
    time?: number;
    /**
     * Total NEBL sent in this transaction in satoshis
     */
    totalsent?: number;
    /**
     * TXID of transaction
     */
    txid?: string;
    /**
     * Total NEBL input in this transaction
     */
    valueIn?: number;
    /**
     * Total NEBL output in this transaction
     */
    valueOut?: number;
    /**
     * Transaction version
     */
    version?: number;
    /**
     * Array of transaction inputs
     */
    vin?: GetTxResponseVin[];
    /**
     * Array of transaction outputs
     */
    vout?: GetTxResponseVout[];
}
