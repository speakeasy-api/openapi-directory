package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioRenderTimeline
 * A timeline object that represents either a request for music to be created or an entire music composition
**/
public class AudioRenderTimeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spans")
    public AudioRenderTimelineSpan[] spans;
    public AudioRenderTimeline withSpans(AudioRenderTimelineSpan[] spans) {
        this.spans = spans;
        return this;
    }
}