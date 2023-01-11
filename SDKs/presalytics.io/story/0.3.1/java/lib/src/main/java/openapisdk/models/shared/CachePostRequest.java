package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CachePostRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_id")
    public String currentUserId;
    public CachePostRequest withCurrentUserId(String currentUserId) {
        this.currentUserId = currentUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public String nonce;
    public CachePostRequest withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subdocument")
    public String subdocument;
    public CachePostRequest withSubdocument(String subdocument) {
        this.subdocument = subdocument;
        return this;
    }
}