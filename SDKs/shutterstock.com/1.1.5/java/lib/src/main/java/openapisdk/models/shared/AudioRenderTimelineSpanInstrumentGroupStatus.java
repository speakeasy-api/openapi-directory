package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AudioRenderTimelineSpanInstrumentGroupStatus
 * The status of an instrument at a specific beat
**/
public class AudioRenderTimelineSpanInstrumentGroupStatus {
    @JsonProperty("beat")
    public Double beat;
    public AudioRenderTimelineSpanInstrumentGroupStatus withBeat(Double beat) {
        this.beat = beat;
        return this;
    }
    @JsonProperty("status")
    public AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum status;
    public AudioRenderTimelineSpanInstrumentGroupStatus withStatus(AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}