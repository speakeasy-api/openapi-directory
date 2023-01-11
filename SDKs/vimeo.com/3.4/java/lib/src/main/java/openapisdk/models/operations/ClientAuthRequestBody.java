package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClientAuthRequestBody {
    @JsonProperty("grant_type")
    public ClientAuthRequestBodyGrantTypeEnum grantType;
    public ClientAuthRequestBody withGrantType(ClientAuthRequestBodyGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonProperty("scope")
    public String scope;
    public ClientAuthRequestBody withScope(String scope) {
        this.scope = scope;
        return this;
    }
}