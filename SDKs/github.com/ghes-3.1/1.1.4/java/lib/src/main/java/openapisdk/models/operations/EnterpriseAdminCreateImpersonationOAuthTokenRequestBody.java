package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public EnterpriseAdminCreateImpersonationOAuthTokenRequestBody withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}