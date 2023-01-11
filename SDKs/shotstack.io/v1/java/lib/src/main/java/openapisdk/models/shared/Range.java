package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Range
 * Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point.
**/
public class Range {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Float length;
    public Range withLength(Float length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Float start;
    public Range withStart(Float start) {
        this.start = start;
        return this;
    }
}