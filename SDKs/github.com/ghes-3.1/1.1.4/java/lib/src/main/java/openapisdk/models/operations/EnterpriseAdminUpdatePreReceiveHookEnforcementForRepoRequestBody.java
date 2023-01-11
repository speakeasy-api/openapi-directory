package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcement")
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum enforcement;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody withEnforcement(EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum enforcement) {
        this.enforcement = enforcement;
        return this;
    }
}