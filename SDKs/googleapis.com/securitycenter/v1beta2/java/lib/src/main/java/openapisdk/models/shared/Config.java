package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Config {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moduleEnablementState")
    public ConfigModuleEnablementStateEnum moduleEnablementState;
    public Config withModuleEnablementState(ConfigModuleEnablementStateEnum moduleEnablementState) {
        this.moduleEnablementState = moduleEnablementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Config withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}