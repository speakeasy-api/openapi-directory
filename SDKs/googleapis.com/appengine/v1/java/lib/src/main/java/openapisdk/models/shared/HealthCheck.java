package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HealthCheck
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
**/
public class HealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkInterval")
    public String checkInterval;
    public HealthCheck withCheckInterval(String checkInterval) {
        this.checkInterval = checkInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableHealthCheck")
    public Boolean disableHealthCheck;
    public HealthCheck withDisableHealthCheck(Boolean disableHealthCheck) {
        this.disableHealthCheck = disableHealthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthyThreshold")
    public Long healthyThreshold;
    public HealthCheck withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public HealthCheck withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restartThreshold")
    public Long restartThreshold;
    public HealthCheck withRestartThreshold(Long restartThreshold) {
        this.restartThreshold = restartThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public HealthCheck withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unhealthyThreshold")
    public Long unhealthyThreshold;
    public HealthCheck withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}