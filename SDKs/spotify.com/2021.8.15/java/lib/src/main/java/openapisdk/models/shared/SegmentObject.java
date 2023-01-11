package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentObject

 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#segment-object - Find more info on the official Spotify Web API Reference
**/
public class SegmentObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Double confidence;
    public SegmentObject withConfidence(Double confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Double duration;
    public SegmentObject withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loudness_end")
    public Double loudnessEnd;
    public SegmentObject withLoudnessEnd(Double loudnessEnd) {
        this.loudnessEnd = loudnessEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loudness_max")
    public Double loudnessMax;
    public SegmentObject withLoudnessMax(Double loudnessMax) {
        this.loudnessMax = loudnessMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loudness_max_time")
    public Double loudnessMaxTime;
    public SegmentObject withLoudnessMaxTime(Double loudnessMaxTime) {
        this.loudnessMaxTime = loudnessMaxTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loudness_start")
    public Double loudnessStart;
    public SegmentObject withLoudnessStart(Double loudnessStart) {
        this.loudnessStart = loudnessStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pitches")
    public Double[] pitches;
    public SegmentObject withPitches(Double[] pitches) {
        this.pitches = pitches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Double start;
    public SegmentObject withStart(Double start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timbre")
    public Double[] timbre;
    public SegmentObject withTimbre(Double[] timbre) {
        this.timbre = timbre;
        return this;
    }
}