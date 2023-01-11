package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnimationFade
 * Display overlay object with fade animation.
**/
public class AnimationFade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeOffset")
    public String endTimeOffset;
    public AnimationFade withEndTimeOffset(String endTimeOffset) {
        this.endTimeOffset = endTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fadeType")
    public AnimationFadeFadeTypeEnum fadeType;
    public AnimationFade withFadeType(AnimationFadeFadeTypeEnum fadeType) {
        this.fadeType = fadeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeOffset")
    public String startTimeOffset;
    public AnimationFade withStartTimeOffset(String startTimeOffset) {
        this.startTimeOffset = startTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xy")
    public NormalizedCoordinate xy;
    public AnimationFade withXy(NormalizedCoordinate xy) {
        this.xy = xy;
        return this;
    }
}