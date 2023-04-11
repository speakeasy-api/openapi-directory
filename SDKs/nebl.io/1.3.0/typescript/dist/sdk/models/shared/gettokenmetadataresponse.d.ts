import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Metadata set by user on token
 */
export declare class GetTokenMetadataResponseMetadataOfIssuanceDataUserData extends SpeakeasyBase {
    meta?: GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta[];
}
export declare class GetTokenMetadataResponseMetadataOfIssuanceData extends SpeakeasyBase {
    /**
     * Token description
     */
    description?: string;
    /**
     * Name of token issuer
     */
    issuer?: string;
    /**
     * Token symbol
     */
    tokenName?: string;
    /**
     * Metadata set by user on token
     */
    userData?: GetTokenMetadataResponseMetadataOfIssuanceDataUserData;
}
/**
 * Metadata set at issuance
 */
export declare class GetTokenMetadataResponseMetadataOfIssuance extends SpeakeasyBase {
    data?: GetTokenMetadataResponseMetadataOfIssuanceData;
}
/**
 * Metadata set by user on token for UTXO
 */
export declare class GetTokenMetadataResponseMetadataOfUtxoUserData extends SpeakeasyBase {
    meta?: Record<string, any>[];
}
/**
 * Metadata set for UTXO
 */
export declare class GetTokenMetadataResponseMetadataOfUtxo extends SpeakeasyBase {
    /**
     * Metadata set by user on token for UTXO
     */
    userData?: GetTokenMetadataResponseMetadataOfUtxoUserData;
}
/**
 * An object containing the metadata of a token
 */
export declare class GetTokenMetadataResponse extends SpeakeasyBase {
    /**
     * Whether the tokens are aggregatable
     */
    aggregationPolicy?: string;
    /**
     * Decimal places the token is divisible to
     */
    divisibility?: number;
    /**
     * Block number token was issued in
     */
    firstBlock?: number;
    /**
     * Total tokens issued in initial issuance
     */
    initialIssuanceAmount?: number;
    /**
     * TXID the token was issued with
     */
    issuanceTxid?: string;
    /**
     * Address that issued the tokens
     */
    issueAddress?: string;
    /**
     * Whether issuance of more tokens is locked
     */
    lockStatus?: boolean;
    /**
     * Metadata set at issuance
     */
    metadataOfIssuance?: GetTokenMetadataResponseMetadataOfIssuance;
    /**
     * Metadata set for UTXO
     */
    metadataOfUtxo?: GetTokenMetadataResponseMetadataOfUtxo;
    /**
     * Number of times tokens have been burned
     */
    numOfBurns?: number;
    /**
     * Total number of addresses this token is held at
     */
    numOfHolders?: number;
    /**
     * Total number of times this token has been issued
     */
    numOfIssuance?: number;
    /**
     * Total number of transactions of this token
     */
    numOfTransfers?: number;
    /**
     * Example UTXO containing this token.
     */
    someUtxo?: string;
    /**
     * ID of the token
     */
    tokenId?: string;
    /**
     * Total number of tokens in supply
     */
    totalSupply?: number;
}
