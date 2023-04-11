import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTokenHoldersResponseHolders extends SpeakeasyBase {
    address?: string;
    amount?: number;
}
/**
 * An object containing all of the addresses holding a token
 */
export declare class GetTokenHoldersResponse extends SpeakeasyBase {
    /**
     * Whether the tokesn are aggregatable
     */
    aggregationPolicy?: string;
    /**
     * How many decimal points the token is divisble to
     */
    divibility?: number;
    holders?: GetTokenHoldersResponseHolders[];
    /**
     * Whether new issuances of this token are locked
     */
    lockStatus?: boolean;
    /**
     * A UTXO of this token
     */
    someUtxo?: string;
    /**
     * TokenId of the token
     */
    tokenId?: string;
}
