import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTransactionInfoResponseVinPreviousOutput extends SpeakeasyBase {
    addresses?: string[];
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type?: string;
}
export declare class GetTransactionInfoResponseVinScriptSig extends SpeakeasyBase {
    asm?: string;
    hex?: string;
}
export declare class GetTransactionInfoResponseVinTokens extends SpeakeasyBase {
    /**
     * Whether the tokens are aggregatable
     */
    aggregationPolicy?: string;
    /**
     * Number of tokens
     */
    amount?: number;
    /**
     * Decimal places the token is divisible to
     */
    divisibility?: number;
    /**
     * TXID the token was issued in
     */
    issueTxid?: string;
    /**
     * Whether issuance of more tokens is locked
     */
    lockStatus?: boolean;
    /**
     * ID of the token
     */
    tokenId?: string;
}
export declare class GetTransactionInfoResponseVin extends SpeakeasyBase {
    previousOutput?: GetTransactionInfoResponseVinPreviousOutput;
    scriptSig?: GetTransactionInfoResponseVinScriptSig;
    sequence?: number;
    tokens?: GetTransactionInfoResponseVinTokens[];
    /**
     * TXID of the input
     */
    txid?: string;
    /**
     * Value of input in NEBL satoshi
     */
    value?: number;
    /**
     * output index
     */
    vout?: number;
}
export declare class GetTransactionInfoResponseVoutScriptPubKey extends SpeakeasyBase {
    addresses?: string[];
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type?: string;
}
export declare class GetTransactionInfoResponseVoutTokens extends SpeakeasyBase {
    /**
     * Whether the tokens are aggregatable
     */
    aggregationPolicy?: string;
    /**
     * Number of tokens
     */
    amount?: number;
    /**
     * Decimal places the token is divisible to
     */
    divisibility?: number;
    /**
     * TXID the token was issued in
     */
    issueTxid?: string;
    /**
     * Whether issuance of more tokens is locked
     */
    lockStatus?: boolean;
    /**
     * ID of the token
     */
    tokenId?: string;
}
export declare class GetTransactionInfoResponseVout extends SpeakeasyBase {
    /**
     * Blockheight of this transaction
     */
    blockheight?: number;
    /**
     * Output index
     */
    n?: number;
    scriptPubKey?: GetTransactionInfoResponseVoutScriptPubKey;
    tokens?: GetTransactionInfoResponseVoutTokens[];
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
     * Value of the output in NEBL satoshi
     */
    value?: number;
}
/**
 * An object represending this transaction
 */
export declare class GetTransactionInfoResponse extends SpeakeasyBase {
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
     * Transaction in raw hex
     */
    hex?: string;
    /**
     * Transaction locktime
     */
    locktime?: number;
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
     * Transaction version
     */
    version?: number;
    /**
     * Array of transaction inputs
     */
    vin?: GetTransactionInfoResponseVin[];
    /**
     * Array of transaction outputs
     */
    vout?: GetTransactionInfoResponseVout[];
}
