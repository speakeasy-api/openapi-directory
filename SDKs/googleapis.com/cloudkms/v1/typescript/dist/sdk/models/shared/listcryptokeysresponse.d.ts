import { SpeakeasyBase } from "../../../internal/utils";
import { CryptoKey } from "./cryptokey";
/**
 * Response message for KeyManagementService.ListCryptoKeys.
 */
export declare class ListCryptoKeysResponse extends SpeakeasyBase {
    /**
     * The list of CryptoKeys.
     */
    cryptoKeys?: CryptoKey[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The total number of CryptoKeys that matched the query.
     */
    totalSize?: number;
}
