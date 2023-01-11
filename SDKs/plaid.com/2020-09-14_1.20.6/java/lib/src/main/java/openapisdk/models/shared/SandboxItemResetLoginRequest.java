package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxItemResetLoginRequest
 * SandboxItemResetLoginRequest defines the request schema for `/sandbox/item/reset_login`
**/
public class SandboxItemResetLoginRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public SandboxItemResetLoginRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxItemResetLoginRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxItemResetLoginRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}