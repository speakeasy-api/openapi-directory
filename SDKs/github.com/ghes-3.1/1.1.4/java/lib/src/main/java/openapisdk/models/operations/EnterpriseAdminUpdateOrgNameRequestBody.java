package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminUpdateOrgNameRequestBody {
    @JsonProperty("login")
    public String login;
    public EnterpriseAdminUpdateOrgNameRequestBody withLogin(String login) {
        this.login = login;
        return this;
    }
}