package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceRam
 * Conditions about a device's RAM capabilities.
**/
public class DeviceRam {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBytes")
    public String maxBytes;
    public DeviceRam withMaxBytes(String maxBytes) {
        this.maxBytes = maxBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBytes")
    public String minBytes;
    public DeviceRam withMinBytes(String minBytes) {
        this.minBytes = minBytes;
        return this;
    }
}