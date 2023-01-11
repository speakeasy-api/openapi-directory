package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Destination
 * Represents a target of an invocation over HTTP.
**/
public class Destination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRunService")
    public CloudRunService cloudRunService;
    public Destination withCloudRunService(CloudRunService cloudRunService) {
        this.cloudRunService = cloudRunService;
        return this;
    }
}