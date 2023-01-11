package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Audio
 * Audio preprocessing configuration.
**/
public class Audio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highBoost")
    public Boolean highBoost;
    public Audio withHighBoost(Boolean highBoost) {
        this.highBoost = highBoost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowBoost")
    public Boolean lowBoost;
    public Audio withLowBoost(Boolean lowBoost) {
        this.lowBoost = lowBoost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lufs")
    public Double lufs;
    public Audio withLufs(Double lufs) {
        this.lufs = lufs;
        return this;
    }
}