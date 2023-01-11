package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemApplicationListRequest
 * Request to list connected applications for a user.
**/
public class ItemApplicationListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public ItemApplicationListRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemApplicationListRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemApplicationListRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}