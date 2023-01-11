package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoOffset
 * Video Offset
**/
public class VideoOffset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetPercentage")
    public Integer offsetPercentage;
    public VideoOffset withOffsetPercentage(Integer offsetPercentage) {
        this.offsetPercentage = offsetPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetSeconds")
    public Integer offsetSeconds;
    public VideoOffset withOffsetSeconds(Integer offsetSeconds) {
        this.offsetSeconds = offsetSeconds;
        return this;
    }
}