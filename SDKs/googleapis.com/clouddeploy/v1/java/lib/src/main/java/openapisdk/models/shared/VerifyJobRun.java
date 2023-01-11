package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyJobRun
 * VerifyJobRun contains information specific to a verify `JobRun`.
**/
public class VerifyJobRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactUri")
    public String artifactUri;
    public VerifyJobRun withArtifactUri(String artifactUri) {
        this.artifactUri = artifactUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public String build;
    public VerifyJobRun withBuild(String build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventLogPath")
    public String eventLogPath;
    public VerifyJobRun withEventLogPath(String eventLogPath) {
        this.eventLogPath = eventLogPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCause")
    public VerifyJobRunFailureCauseEnum failureCause;
    public VerifyJobRun withFailureCause(VerifyJobRunFailureCauseEnum failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureMessage")
    public String failureMessage;
    public VerifyJobRun withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
}