package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessConfig
 * An access config attached to the TPU worker.
**/
public class AccessConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIp")
    public String externalIp;
    public AccessConfig withExternalIp(String externalIp) {
        this.externalIp = externalIp;
        return this;
    }
}