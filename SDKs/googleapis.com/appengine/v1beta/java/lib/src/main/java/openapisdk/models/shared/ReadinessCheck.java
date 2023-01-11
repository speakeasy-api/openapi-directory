package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReadinessCheck
 * Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
**/
public class ReadinessCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appStartTimeout")
    public String appStartTimeout;
    public ReadinessCheck withAppStartTimeout(String appStartTimeout) {
        this.appStartTimeout = appStartTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkInterval")
    public String checkInterval;
    public ReadinessCheck withCheckInterval(String checkInterval) {
        this.checkInterval = checkInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureThreshold")
    public Long failureThreshold;
    public ReadinessCheck withFailureThreshold(Long failureThreshold) {
        this.failureThreshold = failureThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public ReadinessCheck withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ReadinessCheck withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successThreshold")
    public Long successThreshold;
    public ReadinessCheck withSuccessThreshold(Long successThreshold) {
        this.successThreshold = successThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public ReadinessCheck withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}