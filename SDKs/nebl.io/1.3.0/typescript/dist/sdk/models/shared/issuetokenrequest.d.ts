import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing flags that potentialy modify this transaction
 */
export declare class IssueTokenRequestFlags extends SpeakeasyBase {
    /**
     * If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)
     */
    splitChange?: boolean;
}
export declare class IssueTokenRequestMetadataEncryptions extends SpeakeasyBase {
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
export declare class IssueTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
    /**
     * Whether this rule can be modified in future transactions
     */
    locked?: boolean;
    /**
     * Blockheight at wh
     */
    validUntil?: number;
}
export declare class IssueTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
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
export declare class IssueTokenRequestMetadataRulesFees extends SpeakeasyBase {
    /**
     * Array of objects describing fee rules
     */
    items?: IssueTokenRequestMetadataRulesFeesItems[];
    /**
     * Whether this rule can be modified in future transactions
     */
    locked?: boolean;
}
export declare class IssueTokenRequestMetadataRulesHolders extends SpeakeasyBase {
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
export declare class IssueTokenRequestMetadataRules extends SpeakeasyBase {
    /**
     * Object describing expiration rules of the token
     */
    expiration?: IssueTokenRequestMetadataRulesExpiration;
    fees?: IssueTokenRequestMetadataRulesFees;
    /**
     * Array of objects describing what addresses can hold the token
     */
    holders?: IssueTokenRequestMetadataRulesHolders[];
}
export declare class IssueTokenRequestMetadataUrls extends SpeakeasyBase {
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
export declare class IssueTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Metadata set by user on token
 */
export declare class IssueTokenRequestMetadataUserData extends SpeakeasyBase {
    meta?: IssueTokenRequestMetadataUserDataMeta[];
}
/**
 * Object representing all metadata at token issuance
 */
export declare class IssueTokenRequestMetadata extends SpeakeasyBase {
    /**
     * Long name or description of token (ex. Nibble)
     */
    description?: string;
    /**
     * Array of encryption instruction objects for encrypting userData
     */
    encryptions?: IssueTokenRequestMetadataEncryptions[];
    /**
     * Name of token issuer
     */
    issuer?: string;
    /**
     * Object describing token rules
     */
    rules?: IssueTokenRequestMetadataRules;
    /**
     * Token Symbol it will be identified by (ex. NIBBL)
     */
    tokenName?: string;
    urls?: IssueTokenRequestMetadataUrls[];
    /**
     * Metadata set by user on token
     */
    userData?: IssueTokenRequestMetadataUserData;
}
export declare class IssueTokenRequestTransfer extends SpeakeasyBase {
    /**
     * Address to send the amount of issued tokens to
     */
    address?: string;
    amount?: number;
}
/**
 * Object representing the token to be created
 */
export declare class IssueTokenRequest extends SpeakeasyBase {
    /**
     * Number of tokens to issue
     */
    amount: number;
    /**
     * Number of decimal places the token should be divisble by (0-7)
     */
    divisibility: number;
    /**
     * Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
     */
    fee: number;
    /**
     * Object representing flags that potentialy modify this transaction
     */
    flags?: IssueTokenRequestFlags;
    /**
     * Address issuing the token
     */
    issueAddress: string;
    /**
     * Object representing all metadata at token issuance
     */
    metadata?: IssueTokenRequestMetadata;
    /**
     * whether the token should be reissuable
     */
    reissuable: boolean;
    transfer: IssueTokenRequestTransfer[];
}
