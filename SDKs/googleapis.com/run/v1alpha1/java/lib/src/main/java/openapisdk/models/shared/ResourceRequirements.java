package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceRequirements
 * ResourceRequirements describes the compute resource requirements.
**/
public class ResourceRequirements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limits")
    public java.util.Map<String, String> limits;
    public ResourceRequirements withLimits(java.util.Map<String, String> limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public java.util.Map<String, String> requests;
    public ResourceRequirements withRequests(java.util.Map<String, String> requests) {
        this.requests = requests;
        return this;
    }
}