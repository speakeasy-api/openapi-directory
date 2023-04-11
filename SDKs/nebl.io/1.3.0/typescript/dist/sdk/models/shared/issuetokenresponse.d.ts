import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing the token created
 */
export declare class IssueTokenResponse extends SpeakeasyBase {
    /**
     * TokenId of the to be issued token
     */
    tokenId?: string;
    /**
     * Unsigned, raw transaction hex of the transaction to issue the token
     */
    txHex?: string;
}
