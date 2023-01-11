package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartySetProjectConfigResponse
 * Response of setting the project configuration.
**/
public class IdentitytoolkitRelyingpartySetProjectConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public IdentitytoolkitRelyingpartySetProjectConfigResponse withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}