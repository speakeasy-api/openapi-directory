package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AudioRenderTimelineSpanTempoChanges
 * An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
**/
public class AudioRenderTimelineSpanTempoChanges {
    @JsonProperty("tempo")
    public Double tempo;
    public AudioRenderTimelineSpanTempoChanges withTempo(Double tempo) {
        this.tempo = tempo;
        return this;
    }
    @JsonProperty("time")
    public Double time;
    public AudioRenderTimelineSpanTempoChanges withTime(Double time) {
        this.time = time;
        return this;
    }
}