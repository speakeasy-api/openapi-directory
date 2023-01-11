package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GitUpdateRefRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public GitUpdateRefRequestBody withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public GitUpdateRefRequestBody withSha(String sha) {
        this.sha = sha;
        return this;
    }
}