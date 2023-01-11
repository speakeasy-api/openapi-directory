package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyControllerMonitoringConfig
 * MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
**/
public class PolicyControllerMonitoringConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public PolicyControllerMonitoringConfigBackendsEnum[] backends;
    public PolicyControllerMonitoringConfig withBackends(PolicyControllerMonitoringConfigBackendsEnum[] backends) {
        this.backends = backends;
        return this;
    }
}