import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing flags that potentialy modify this transaction
 */
export declare class SendTokenRequestFlags extends SpeakeasyBase {
    /**
     * If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)
     */
    splitChange?: boolean;
}
export declare class SendTokenRequestMetadataEncryptions extends SpeakeasyBase {
    /**
     * key format (pem or der)
     */
    format?: string;
    /**
     * userData key to encrypt
     */
    key?: string;
    /**
     * RSA public key used for encryption
     */
    pubkey?: string;
    /**
     * pkcs1 or pkcs8
     */
    type?: string;
}
/**
 * Object describing expiration rules of the token
 */
export declare class SendTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
    /**
     * Whether this rule can be modified in future transactions
     */
    locked?: boolean;
    /**
     * Blockheight at wh
     */
    validUntil?: number;
}
export declare class SendTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
    /**
     * Address fee is auto sent to
     */
    address?: string;
    /**
     * How fee should be paid, either with a tokenId, or with NEBL if null
     */
    tokenId?: string;
    /**
     * Amount of NTP1 token, or NEBL (in satoshi) to pay as fee
     */
    value?: string;
}
export declare class SendTokenRequestMetadataRulesFees extends SpeakeasyBase {
    /**
     * Array of objects describing fee rules
     */
    items?: SendTokenRequestMetadataRulesFeesItems[];
    /**
     * Whether this rule can be modified in future transactions
     */
    locked?: boolean;
}
export declare class SendTokenRequestMetadataRulesHolders extends SpeakeasyBase {
    /**
     * Address that can hold the token
     */
    address?: string;
    /**
     * Whether this rule can be modified in future transactions
     */
    locked?: boolean;
}
/**
 * Object describing token rules
 */
export declare class SendTokenRequestMetadataRules extends SpeakeasyBase {
    /**
     * Object describing expiration rules of the token
     */
    expiration?: SendTokenRequestMetadataRulesExpiration;
    fees?: SendTokenRequestMetadataRulesFees;
    /**
     * Array of objects describing what addresses can hold the token
     */
    holders?: SendTokenRequestMetadataRulesHolders[];
}
export declare class SendTokenRequestMetadataUrls extends SpeakeasyBase {
    /**
     * Hash of data at the URL, used for verification
     */
    dataHash?: string;
    /**
     * mimeType of URL content
     */
    mimeType?: string;
    /**
     * Name of the URL
     */
    name?: string;
    /**
     * Actual URL
     */
    url?: string;
}
export declare class SendTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Metadata set by user on token
 */
export declare class SendTokenRequestMetadataUserData extends SpeakeasyBase {
    meta?: SendTokenRequestMetadataUserDataMeta[];
}
/**
 * Object representing all metadata at token issuance
 */
export declare class SendTokenRequestMetadata extends SpeakeasyBase {
    /**
     * Long name or description of token (ex. Nibble)
     */
    description?: string;
    /**
     * Array of encryption instruction objects for encrypting userData
     */
    encryptions?: SendTokenRequestMetadataEncryptions[];
    /**
     * Name of token issuer
     */
    issuer?: string;
    /**
     * Object describing token rules
     */
    rules?: SendTokenRequestMetadataRules;
    /**
     * Token Symbol it will be identified by (ex. NIBBL)
     */
    tokenName?: string;
    urls?: SendTokenRequestMetadataUrls[];
    /**
     * Metadata set by user on token
     */
    userData?: SendTokenRequestMetadataUserData;
}
export declare class SendTokenRequestTo extends SpeakeasyBase {
    /**
     * Address to transfer tokens to
     */
    address?: string;
    /**
     * Number of tokens to send
     */
    amount?: number;
    /**
     * ID of token we are sending
     */
    tokenId?: string;
}
/**
 * Object representing the token to be sent
 */
export declare class SendTokenRequest extends SpeakeasyBase {
    /**
     * Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
     */
    fee: number;
    /**
     * Object representing flags that potentialy modify this transaction
     */
    flags?: SendTokenRequestFlags;
    /**
     * Array of addresses to send the token from
     */
    from?: string[];
    /**
     * Object representing all metadata at token issuance
     */
    metadata?: SendTokenRequestMetadata;
    /**
     * Array of UTXOs to send the token from
     */
    sendutxo?: string[];
    to: SendTokenRequestTo[];
}
