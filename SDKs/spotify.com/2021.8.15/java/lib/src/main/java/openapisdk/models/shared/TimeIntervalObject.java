package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeIntervalObject

 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#time-interval-object - Find more info on the official Spotify Web API Reference
**/
public class TimeIntervalObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Double confidence;
    public TimeIntervalObject withConfidence(Double confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Double duration;
    public TimeIntervalObject withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Double start;
    public TimeIntervalObject withStart(Double start) {
        this.start = start;
        return this;
    }
}