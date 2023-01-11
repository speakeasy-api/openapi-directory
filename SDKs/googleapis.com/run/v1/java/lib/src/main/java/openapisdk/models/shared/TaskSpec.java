package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskSpec
 * TaskSpec is a description of a task.
**/
public class TaskSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public Container[] containers;
    public TaskSpec withContainers(Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetries")
    public Integer maxRetries;
    public TaskSpec withMaxRetries(Integer maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountName")
    public String serviceAccountName;
    public TaskSpec withServiceAccountName(String serviceAccountName) {
        this.serviceAccountName = serviceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutSeconds")
    public String timeoutSeconds;
    public TaskSpec withTimeoutSeconds(String timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Volume[] volumes;
    public TaskSpec withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}