package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectLaunchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProjectLaunchResponseEnumEnum status;
    public ProjectLaunchResponse withStatus(ProjectLaunchResponseEnumEnum status) {
        this.status = status;
        return this;
    }
}