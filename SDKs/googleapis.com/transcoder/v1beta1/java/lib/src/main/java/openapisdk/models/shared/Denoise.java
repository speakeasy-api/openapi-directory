package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Denoise
 * Denoise preprocessing configuration.
**/
public class Denoise {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strength")
    public Double strength;
    public Denoise withStrength(Double strength) {
        this.strength = strength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tune")
    public String tune;
    public Denoise withTune(String tune) {
        this.tune = tune;
        return this;
    }
}