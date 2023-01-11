package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioAnalysisObject

 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
**/
public class AudioAnalysisObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bars")
    public TimeIntervalObject[] bars;
    public AudioAnalysisObject withBars(TimeIntervalObject[] bars) {
        this.bars = bars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beats")
    public TimeIntervalObject[] beats;
    public AudioAnalysisObject withBeats(TimeIntervalObject[] beats) {
        this.beats = beats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sections")
    public SectionObject[] sections;
    public AudioAnalysisObject withSections(SectionObject[] sections) {
        this.sections = sections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public SegmentObject[] segments;
    public AudioAnalysisObject withSegments(SegmentObject[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tatums")
    public TimeIntervalObject[] tatums;
    public AudioAnalysisObject withTatums(TimeIntervalObject[] tatums) {
        this.tatums = tatums;
        return this;
    }
}