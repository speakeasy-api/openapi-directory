package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YadifConfig
 * Yet Another Deinterlacing Filter Configuration.
**/
public class YadifConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deinterlaceAllFrames")
    public Boolean deinterlaceAllFrames;
    public YadifConfig withDeinterlaceAllFrames(Boolean deinterlaceAllFrames) {
        this.deinterlaceAllFrames = deinterlaceAllFrames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableSpatialInterlacing")
    public Boolean disableSpatialInterlacing;
    public YadifConfig withDisableSpatialInterlacing(Boolean disableSpatialInterlacing) {
        this.disableSpatialInterlacing = disableSpatialInterlacing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public YadifConfig withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parity")
    public String parity;
    public YadifConfig withParity(String parity) {
        this.parity = parity;
        return this;
    }
}