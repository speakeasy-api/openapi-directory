package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BwdifConfig
 * Bob Weaver Deinterlacing Filter Configuration.
**/
public class BwdifConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deinterlaceAllFrames")
    public Boolean deinterlaceAllFrames;
    public BwdifConfig withDeinterlaceAllFrames(Boolean deinterlaceAllFrames) {
        this.deinterlaceAllFrames = deinterlaceAllFrames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public BwdifConfig withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parity")
    public String parity;
    public BwdifConfig withParity(String parity) {
        this.parity = parity;
        return this;
    }
}