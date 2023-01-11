package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheck")
    public HealthCheckHealthCheck healthCheck;
    public HealthCheck withHealthCheck(HealthCheckHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
}