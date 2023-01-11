package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AudioRenderTimelineSpanRegionEndType
 * A high-level description of how a region ends
**/
public class AudioRenderTimelineSpanRegionEndType {
    @JsonProperty("beat")
    public Double beat;
    public AudioRenderTimelineSpanRegionEndType withBeat(Double beat) {
        this.beat = beat;
        return this;
    }
    @JsonProperty("event")
    public AudioRenderTimelineSpanRegionEndTypeEventEnum event;
    public AudioRenderTimelineSpanRegionEndType withEvent(AudioRenderTimelineSpanRegionEndTypeEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonProperty("type")
    public AudioRenderTimelineSpanRegionEndTypeTypeEnum type;
    public AudioRenderTimelineSpanRegionEndType withType(AudioRenderTimelineSpanRegionEndTypeTypeEnum type) {
        this.type = type;
        return this;
    }
}