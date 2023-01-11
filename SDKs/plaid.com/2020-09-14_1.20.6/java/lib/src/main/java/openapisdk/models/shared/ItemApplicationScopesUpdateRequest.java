package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemApplicationScopesUpdateRequest
 * ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
**/
public class ItemApplicationScopesUpdateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ItemApplicationScopesUpdateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("application_id")
    public String applicationId;
    public ItemApplicationScopesUpdateRequest withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemApplicationScopesUpdateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("scopes")
    public Scopes scopes;
    public ItemApplicationScopesUpdateRequest withScopes(Scopes scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemApplicationScopesUpdateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}