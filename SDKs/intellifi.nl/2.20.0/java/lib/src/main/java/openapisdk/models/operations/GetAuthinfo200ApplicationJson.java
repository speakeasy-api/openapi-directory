package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthinfo200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_key_id")
    public String apiKeyId;
    public GetAuthinfo200ApplicationJson withApiKeyId(String apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_method")
    public GetAuthinfo200ApplicationJsonAuthMethodEnum authMethod;
    public GetAuthinfo200ApplicationJson withAuthMethod(GetAuthinfo200ApplicationJsonAuthMethodEnum authMethod) {
        this.authMethod = authMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticated")
    public Boolean authenticated;
    public GetAuthinfo200ApplicationJson withAuthenticated(Boolean authenticated) {
        this.authenticated = authenticated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public GetAuthinfo200ApplicationJsonPermissions permissions;
    public GetAuthinfo200ApplicationJson withPermissions(GetAuthinfo200ApplicationJsonPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetAuthinfo200ApplicationJson withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public GetAuthinfo200ApplicationJson withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}