package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HealthCheckHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Info")
    public String info;
    public HealthCheckHealthCheck withInfo(String info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public HealthCheckHealthCheck withVersion(String version) {
        this.version = version;
        return this;
    }
}