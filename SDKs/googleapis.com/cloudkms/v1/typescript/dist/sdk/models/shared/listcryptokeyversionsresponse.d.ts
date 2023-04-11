import { SpeakeasyBase } from "../../../internal/utils";
import { CryptoKeyVersion } from "./cryptokeyversion";
/**
 * Response message for KeyManagementService.ListCryptoKeyVersions.
 */
export declare class ListCryptoKeyVersionsResponse extends SpeakeasyBase {
    /**
     * The list of CryptoKeyVersions.
     */
    cryptoKeyVersions?: CryptoKeyVersion[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The total number of CryptoKeyVersions that matched the query.
     */
    totalSize?: number;
}
