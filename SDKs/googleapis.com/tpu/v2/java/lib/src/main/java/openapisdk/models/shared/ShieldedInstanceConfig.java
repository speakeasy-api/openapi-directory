package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShieldedInstanceConfig
 * A set of Shielded Instance options.
**/
public class ShieldedInstanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSecureBoot")
    public Boolean enableSecureBoot;
    public ShieldedInstanceConfig withEnableSecureBoot(Boolean enableSecureBoot) {
        this.enableSecureBoot = enableSecureBoot;
        return this;
    }
}