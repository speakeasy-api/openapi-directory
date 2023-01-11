package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCryptoKeyVersionsResponse
 * Response message for KeyManagementService.ListCryptoKeyVersions.
**/
public class ListCryptoKeyVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyVersions")
    public CryptoKeyVersion[] cryptoKeyVersions;
    public ListCryptoKeyVersionsResponse withCryptoKeyVersions(CryptoKeyVersion[] cryptoKeyVersions) {
        this.cryptoKeyVersions = cryptoKeyVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCryptoKeyVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListCryptoKeyVersionsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}