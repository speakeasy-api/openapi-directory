package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsSetGithubActionsPermissionsRepositoryRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_actions")
    public openapisdk.models.shared.AllowedActionsEnum allowedActions;
    public ActionsSetGithubActionsPermissionsRepositoryRequestBody withAllowedActions(openapisdk.models.shared.AllowedActionsEnum allowedActions) {
        this.allowedActions = allowedActions;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public ActionsSetGithubActionsPermissionsRepositoryRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}