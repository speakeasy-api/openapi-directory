package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayorCreateApiKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public PayorCreateApiKeyResponse withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiSecret")
    public String apiSecret;
    public PayorCreateApiKeyResponse withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
}