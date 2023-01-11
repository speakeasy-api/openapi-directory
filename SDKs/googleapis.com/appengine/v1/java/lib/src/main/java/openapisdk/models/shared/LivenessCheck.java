package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LivenessCheck
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
**/
public class LivenessCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkInterval")
    public String checkInterval;
    public LivenessCheck withCheckInterval(String checkInterval) {
        this.checkInterval = checkInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureThreshold")
    public Long failureThreshold;
    public LivenessCheck withFailureThreshold(Long failureThreshold) {
        this.failureThreshold = failureThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public LivenessCheck withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialDelay")
    public String initialDelay;
    public LivenessCheck withInitialDelay(String initialDelay) {
        this.initialDelay = initialDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public LivenessCheck withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successThreshold")
    public Long successThreshold;
    public LivenessCheck withSuccessThreshold(Long successThreshold) {
        this.successThreshold = successThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public LivenessCheck withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}