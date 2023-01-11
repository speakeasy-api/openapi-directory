package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecycleConfig
 * Specifies the cluster auto-delete schedule configuration.
**/
public class LifecycleConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDeleteTime")
    public String autoDeleteTime;
    public LifecycleConfig withAutoDeleteTime(String autoDeleteTime) {
        this.autoDeleteTime = autoDeleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDeleteTtl")
    public String autoDeleteTtl;
    public LifecycleConfig withAutoDeleteTtl(String autoDeleteTtl) {
        this.autoDeleteTtl = autoDeleteTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleDeleteTtl")
    public String idleDeleteTtl;
    public LifecycleConfig withIdleDeleteTtl(String idleDeleteTtl) {
        this.idleDeleteTtl = idleDeleteTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleStartTime")
    public String idleStartTime;
    public LifecycleConfig withIdleStartTime(String idleStartTime) {
        this.idleStartTime = idleStartTime;
        return this;
    }
}