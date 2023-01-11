package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleVerifyVideoViewability
 * Details of DoubleVerify video viewability settings.
**/
public class DoubleVerifyVideoViewability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerImpressionRate")
    public DoubleVerifyVideoViewabilityPlayerImpressionRateEnum playerImpressionRate;
    public DoubleVerifyVideoViewability withPlayerImpressionRate(DoubleVerifyVideoViewabilityPlayerImpressionRateEnum playerImpressionRate) {
        this.playerImpressionRate = playerImpressionRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoIab")
    public DoubleVerifyVideoViewabilityVideoIabEnum videoIab;
    public DoubleVerifyVideoViewability withVideoIab(DoubleVerifyVideoViewabilityVideoIabEnum videoIab) {
        this.videoIab = videoIab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoViewableRate")
    public DoubleVerifyVideoViewabilityVideoViewableRateEnum videoViewableRate;
    public DoubleVerifyVideoViewability withVideoViewableRate(DoubleVerifyVideoViewabilityVideoViewableRateEnum videoViewableRate) {
        this.videoViewableRate = videoViewableRate;
        return this;
    }
}