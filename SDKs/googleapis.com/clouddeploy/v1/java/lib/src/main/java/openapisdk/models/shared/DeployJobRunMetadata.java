package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeployJobRunMetadata
 * DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.
**/
public class DeployJobRunMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRun")
    public CloudRunMetadata cloudRun;
    public DeployJobRunMetadata withCloudRun(CloudRunMetadata cloudRun) {
        this.cloudRun = cloudRun;
        return this;
    }
}