package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnimationStatic
 * Display static overlay object.
**/
public class AnimationStatic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeOffset")
    public String startTimeOffset;
    public AnimationStatic withStartTimeOffset(String startTimeOffset) {
        this.startTimeOffset = startTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xy")
    public NormalizedCoordinate xy;
    public AnimationStatic withXy(NormalizedCoordinate xy) {
        this.xy = xy;
        return this;
    }
}