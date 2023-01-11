package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeShieldedInstanceConfig
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
**/
public class RuntimeShieldedInstanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableIntegrityMonitoring")
    public Boolean enableIntegrityMonitoring;
    public RuntimeShieldedInstanceConfig withEnableIntegrityMonitoring(Boolean enableIntegrityMonitoring) {
        this.enableIntegrityMonitoring = enableIntegrityMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSecureBoot")
    public Boolean enableSecureBoot;
    public RuntimeShieldedInstanceConfig withEnableSecureBoot(Boolean enableSecureBoot) {
        this.enableSecureBoot = enableSecureBoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableVtpm")
    public Boolean enableVtpm;
    public RuntimeShieldedInstanceConfig withEnableVtpm(Boolean enableVtpm) {
        this.enableVtpm = enableVtpm;
        return this;
    }
}