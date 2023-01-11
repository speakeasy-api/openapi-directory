package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2ListKeysResponse
 * Response message for `ListKeys` method.
**/
public class V2ListKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public V2Key[] keys;
    public V2ListKeysResponse withKeys(V2Key[] keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public V2ListKeysResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}