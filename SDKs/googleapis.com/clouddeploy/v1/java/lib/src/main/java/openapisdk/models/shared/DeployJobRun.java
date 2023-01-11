package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeployJobRun
 * DeployJobRun contains information specific to a deploy `JobRun`.
**/
public class DeployJobRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public String build;
    public DeployJobRun withBuild(String build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCause")
    public DeployJobRunFailureCauseEnum failureCause;
    public DeployJobRun withFailureCause(DeployJobRunFailureCauseEnum failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureMessage")
    public String failureMessage;
    public DeployJobRun withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public DeployJobRunMetadata metadata;
    public DeployJobRun withMetadata(DeployJobRunMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}