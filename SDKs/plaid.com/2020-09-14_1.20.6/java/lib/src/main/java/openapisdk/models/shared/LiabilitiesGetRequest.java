package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiabilitiesGetRequest
 * LiabilitiesGetRequest defines the request schema for `/liabilities/get`
**/
public class LiabilitiesGetRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public LiabilitiesGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public LiabilitiesGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public LiabilitiesGetRequestOptions options;
    public LiabilitiesGetRequest withOptions(LiabilitiesGetRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public LiabilitiesGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}