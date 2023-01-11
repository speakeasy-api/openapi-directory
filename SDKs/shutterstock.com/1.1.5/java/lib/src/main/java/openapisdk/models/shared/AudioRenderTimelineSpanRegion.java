package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioRenderTimelineSpanRegion
 * A period of music or silence, measured in beats
**/
public class AudioRenderTimelineSpanRegion {
    @JsonProperty("beat")
    public Long beat;
    public AudioRenderTimelineSpanRegion withBeat(Long beat) {
        this.beat = beat;
        return this;
    }
    @JsonProperty("descriptor")
    public String descriptor;
    public AudioRenderTimelineSpanRegion withDescriptor(String descriptor) {
        this.descriptor = descriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_type")
    public AudioRenderTimelineSpanRegionEndType endType;
    public AudioRenderTimelineSpanRegion withEndType(AudioRenderTimelineSpanRegionEndType endType) {
        this.endType = endType;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public AudioRenderTimelineSpanRegion withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public AudioRenderTimelineSpanRegionKey key;
    public AudioRenderTimelineSpanRegion withKey(AudioRenderTimelineSpanRegionKey key) {
        this.key = key;
        return this;
    }
    @JsonProperty("region")
    public AudioRenderTimelineSpanRegionRegionEnum region;
    public AudioRenderTimelineSpanRegion withRegion(AudioRenderTimelineSpanRegionRegionEnum region) {
        this.region = region;
        return this;
    }
}