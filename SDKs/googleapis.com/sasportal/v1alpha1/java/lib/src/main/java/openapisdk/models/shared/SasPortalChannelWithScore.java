package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalChannelWithScore
 * The channel with score.
**/
public class SasPortalChannelWithScore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyRange")
    public SasPortalFrequencyRange frequencyRange;
    public SasPortalChannelWithScore withFrequencyRange(SasPortalFrequencyRange frequencyRange) {
        this.frequencyRange = frequencyRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public SasPortalChannelWithScore withScore(Double score) {
        this.score = score;
        return this;
    }
}