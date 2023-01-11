package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Template
 * The template used for creating replicas in the pool.
**/
public class Template {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public Action action;
    public Template withAction(Action action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthChecks")
    public HealthCheck[] healthChecks;
    public Template withHealthChecks(HealthCheck[] healthChecks) {
        this.healthChecks = healthChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Template withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmParams")
    public VmParams vmParams;
    public Template withVmParams(VmParams vmParams) {
        this.vmParams = vmParams;
        return this;
    }
}