package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListKeyRingsResponse
 * Response message for KeyManagementService.ListKeyRings.
**/
public class ListKeyRingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyRings")
    public KeyRing[] keyRings;
    public ListKeyRingsResponse withKeyRings(KeyRing[] keyRings) {
        this.keyRings = keyRings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListKeyRingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListKeyRingsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}