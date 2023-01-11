package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestUtilization
 * Target scaling by request utilization. Only applicable in the App Engine flexible environment.
**/
public class RequestUtilization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetConcurrentRequests")
    public Integer targetConcurrentRequests;
    public RequestUtilization withTargetConcurrentRequests(Integer targetConcurrentRequests) {
        this.targetConcurrentRequests = targetConcurrentRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetRequestCountPerSecond")
    public Integer targetRequestCountPerSecond;
    public RequestUtilization withTargetRequestCountPerSecond(Integer targetRequestCountPerSecond) {
        this.targetRequestCountPerSecond = targetRequestCountPerSecond;
        return this;
    }
}