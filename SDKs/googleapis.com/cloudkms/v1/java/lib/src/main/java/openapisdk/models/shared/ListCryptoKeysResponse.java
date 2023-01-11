package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCryptoKeysResponse
 * Response message for KeyManagementService.ListCryptoKeys.
**/
public class ListCryptoKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeys")
    public CryptoKey[] cryptoKeys;
    public ListCryptoKeysResponse withCryptoKeys(CryptoKey[] cryptoKeys) {
        this.cryptoKeys = cryptoKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCryptoKeysResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListCryptoKeysResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}