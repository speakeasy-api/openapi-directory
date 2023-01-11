package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeAccessConfig
 * Specifies the login configuration for Runtime
**/
public class RuntimeAccessConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessType")
    public RuntimeAccessConfigAccessTypeEnum accessType;
    public RuntimeAccessConfig withAccessType(RuntimeAccessConfigAccessTypeEnum accessType) {
        this.accessType = accessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxyUri")
    public String proxyUri;
    public RuntimeAccessConfig withProxyUri(String proxyUri) {
        this.proxyUri = proxyUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeOwner")
    public String runtimeOwner;
    public RuntimeAccessConfig withRuntimeOwner(String runtimeOwner) {
        this.runtimeOwner = runtimeOwner;
        return this;
    }
}