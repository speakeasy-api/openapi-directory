package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metadata
 * Metadata includes information associated with a `Rollout`.
**/
public class Metadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRun")
    public CloudRunMetadata cloudRun;
    public Metadata withCloudRun(CloudRunMetadata cloudRun) {
        this.cloudRun = cloudRun;
        return this;
    }
}