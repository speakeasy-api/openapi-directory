package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeAccessConfigInput
 * Specifies the login configuration for Runtime
**/
public class RuntimeAccessConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessType")
    public RuntimeAccessConfigAccessTypeEnum accessType;
    public RuntimeAccessConfigInput withAccessType(RuntimeAccessConfigAccessTypeEnum accessType) {
        this.accessType = accessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeOwner")
    public String runtimeOwner;
    public RuntimeAccessConfigInput withRuntimeOwner(String runtimeOwner) {
        this.runtimeOwner = runtimeOwner;
        return this;
    }
}