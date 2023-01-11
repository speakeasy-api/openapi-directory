package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Phase
 * Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
**/
public class Phase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentJobs")
    public DeploymentJobs deploymentJobs;
    public Phase withDeploymentJobs(DeploymentJobs deploymentJobs) {
        this.deploymentJobs = deploymentJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Phase withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PhaseStateEnum state;
    public Phase withState(PhaseStateEnum state) {
        this.state = state;
        return this;
    }
}