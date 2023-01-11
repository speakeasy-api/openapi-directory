package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecycleConfigInput
 * Specifies the cluster auto-delete schedule configuration.
**/
public class LifecycleConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDeleteTime")
    public String autoDeleteTime;
    public LifecycleConfigInput withAutoDeleteTime(String autoDeleteTime) {
        this.autoDeleteTime = autoDeleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDeleteTtl")
    public String autoDeleteTtl;
    public LifecycleConfigInput withAutoDeleteTtl(String autoDeleteTtl) {
        this.autoDeleteTtl = autoDeleteTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleDeleteTtl")
    public String idleDeleteTtl;
    public LifecycleConfigInput withIdleDeleteTtl(String idleDeleteTtl) {
        this.idleDeleteTtl = idleDeleteTtl;
        return this;
    }
}