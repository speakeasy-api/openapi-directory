package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceStatus
 * Message describing resource status
**/
public class ResourceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesNewerVersions")
    public String[] rulesNewerVersions;
    public ResourceStatus withRulesNewerVersions(String[] rulesNewerVersions) {
        this.rulesNewerVersions = rulesNewerVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ResourceStatusStateEnum state;
    public ResourceStatus withState(ResourceStatusStateEnum state) {
        this.state = state;
        return this;
    }
}