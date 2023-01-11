package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SessionRequest {
    @JsonProperty("clientId")
    public String clientId;
    public SessionRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public SessionRequest withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
}