package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicScaling
 * A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
**/
public class BasicScaling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleTimeout")
    public String idleTimeout;
    public BasicScaling withIdleTimeout(String idleTimeout) {
        this.idleTimeout = idleTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstances")
    public Integer maxInstances;
    public BasicScaling withMaxInstances(Integer maxInstances) {
        this.maxInstances = maxInstances;
        return this;
    }
}