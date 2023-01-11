package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShieldedInstanceConfig
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
**/
public class ShieldedInstanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableIntegrityMonitoring")
    public Boolean enableIntegrityMonitoring;
    public ShieldedInstanceConfig withEnableIntegrityMonitoring(Boolean enableIntegrityMonitoring) {
        this.enableIntegrityMonitoring = enableIntegrityMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSecureBoot")
    public Boolean enableSecureBoot;
    public ShieldedInstanceConfig withEnableSecureBoot(Boolean enableSecureBoot) {
        this.enableSecureBoot = enableSecureBoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableVtpm")
    public Boolean enableVtpm;
    public ShieldedInstanceConfig withEnableVtpm(Boolean enableVtpm) {
        this.enableVtpm = enableVtpm;
        return this;
    }
}