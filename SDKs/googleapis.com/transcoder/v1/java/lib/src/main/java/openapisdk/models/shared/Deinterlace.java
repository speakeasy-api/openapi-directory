package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Deinterlace
 * Deinterlace configuration for input video.
**/
public class Deinterlace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bwdif")
    public BwdifConfig bwdif;
    public Deinterlace withBwdif(BwdifConfig bwdif) {
        this.bwdif = bwdif;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yadif")
    public YadifConfig yadif;
    public Deinterlace withYadif(YadifConfig yadif) {
        this.yadif = yadif;
        return this;
    }
}