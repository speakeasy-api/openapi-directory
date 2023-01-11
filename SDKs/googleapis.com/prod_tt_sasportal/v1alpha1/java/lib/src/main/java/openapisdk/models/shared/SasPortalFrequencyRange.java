package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalFrequencyRange
 * Frequency range from `low_frequency` to `high_frequency`.
**/
public class SasPortalFrequencyRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highFrequencyMhz")
    public Double highFrequencyMhz;
    public SasPortalFrequencyRange withHighFrequencyMhz(Double highFrequencyMhz) {
        this.highFrequencyMhz = highFrequencyMhz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowFrequencyMhz")
    public Double lowFrequencyMhz;
    public SasPortalFrequencyRange withLowFrequencyMhz(Double lowFrequencyMhz) {
        this.lowFrequencyMhz = lowFrequencyMhz;
        return this;
    }
}