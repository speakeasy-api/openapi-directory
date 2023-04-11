import { SpeakeasyBase } from "../../../internal/utils";
export declare class BurnTokenRequestBurn extends SpeakeasyBase {
    /**
     * Amount of tokens to burn
     */
    amount?: number;
    /**
     * Unique token id we are burning
     */
    tokenId?: string;
}
export declare class BurnTokenRequestTransfer extends SpeakeasyBase {
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
 * Object representing the token to be burned
 */
export declare class BurnTokenRequest extends SpeakeasyBase {
    /**
     * Array of objects representing tokens to be burned
     */
    burn: BurnTokenRequestBurn[];
    /**
     * Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
     */
    fee: number;
    /**
     * Array of addresses to send the token from
     */
    from?: string[];
    transfer?: BurnTokenRequestTransfer[];
}
