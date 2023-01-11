package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioRenderTimelineSpan
 * The beginning of a non-overlapping period of absolute time
**/
public class AudioRenderTimelineSpan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Double id;
    public AudioRenderTimelineSpan withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instrument_groups")
    public AudioRenderTimelineSpanInstrumentGroup[] instrumentGroups;
    public AudioRenderTimelineSpan withInstrumentGroups(AudioRenderTimelineSpanInstrumentGroup[] instrumentGroups) {
        this.instrumentGroups = instrumentGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public AudioRenderTimelineSpanRegion[] regions;
    public AudioRenderTimelineSpan withRegions(AudioRenderTimelineSpanRegion[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonProperty("span_type")
    public AudioRenderTimelineSpanSpanTypeEnum spanType;
    public AudioRenderTimelineSpan withSpanType(AudioRenderTimelineSpanSpanTypeEnum spanType) {
        this.spanType = spanType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tempo")
    public Long tempo;
    public AudioRenderTimelineSpan withTempo(Long tempo) {
        this.tempo = tempo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tempo_changes")
    public AudioRenderTimelineSpanTempoChanges[] tempoChanges;
    public AudioRenderTimelineSpan withTempoChanges(AudioRenderTimelineSpanTempoChanges[] tempoChanges) {
        this.tempoChanges = tempoChanges;
        return this;
    }
    @JsonProperty("time")
    public Long time;
    public AudioRenderTimelineSpan withTime(Long time) {
        this.time = time;
        return this;
    }
}