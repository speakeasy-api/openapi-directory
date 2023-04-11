import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddressInfoResponseUtxosTokens extends SpeakeasyBase {
    /**
     * Whether the tokens can be aggregated together
     */
    aggregationPolicy?: string;
    /**
     * Number of Tokens
     */
    amount?: number;
    /**
     * Decimal places the token is divisible to
     */
    divisibility?: number;
    /**
     * TXID the token originally was issued in
     */
    issueTxid?: string;
    /**
     * Whether the token is locked, preventing more from being issued
     */
    lockStatus?: boolean;
    /**
     * Unique NTP1 identifier for this token
     */
    tokenId?: string;
}
export declare class GetAddressInfoResponseUtxos extends SpeakeasyBase {
    /**
     * Blockheight of the UTXO
     */
    blockheight?: number;
    /**
     * Blocktime of the UTXO
     */
    blocktime?: number;
    /**
     * Index of the UTXO at this address
     */
    index?: number;
    /**
     * Object representing the scruptPubKey of the UTXO
     */
    scriptPubKey?: Record<string, any>;
    /**
     * Array of NTP1 tokens in this UTXO.
     */
    tokens?: GetAddressInfoResponseUtxosTokens[];
    /**
     * Txid of this UTXO
     */
    txid?: string;
    /**
     * Whether the UTXO has been used
     */
    used?: boolean;
    /**
     * Value of the UTXO in NEBL satoshi
     */
    value?: number;
}
/**
 * An object with an array of UTXOs for this address
 */
export declare class GetAddressInfoResponse extends SpeakeasyBase {
    /**
     * The Neblio Address
     */
    address?: string;
    /**
     * Array of UTXOs held at this address.
     */
    utxos?: GetAddressInfoResponseUtxos[];
}
