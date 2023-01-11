package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOauthLiveSessionToken200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffie_hellman_response")
    public String diffieHellmanResponse;
    public PostOauthLiveSessionToken200ApplicationJson withDiffieHellmanResponse(String diffieHellmanResponse) {
        this.diffieHellmanResponse = diffieHellmanResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_session_token_signature")
    public String liveSessionTokenSignature;
    public PostOauthLiveSessionToken200ApplicationJson withLiveSessionTokenSignature(String liveSessionTokenSignature) {
        this.liveSessionTokenSignature = liveSessionTokenSignature;
        return this;
    }
}