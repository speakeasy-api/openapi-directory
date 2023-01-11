package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentJobs
 * Deployment job composition.
**/
public class DeploymentJobs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployJob")
    public Job deployJob;
    public DeploymentJobs withDeployJob(Job deployJob) {
        this.deployJob = deployJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyJob")
    public Job verifyJob;
    public DeploymentJobs withVerifyJob(Job verifyJob) {
        this.verifyJob = verifyJob;
        return this;
    }
}