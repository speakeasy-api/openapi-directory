package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioRenderTimelineSpanInstrumentGroup
 * An instrument and the status objects that specify when that instrument plays
**/
public class AudioRenderTimelineSpanInstrumentGroup {
    @JsonProperty("instrument_group")
    public String instrumentGroup;
    public AudioRenderTimelineSpanInstrumentGroup withInstrumentGroup(String instrumentGroup) {
        this.instrumentGroup = instrumentGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses")
    public AudioRenderTimelineSpanInstrumentGroupStatus[] statuses;
    public AudioRenderTimelineSpanInstrumentGroup withStatuses(AudioRenderTimelineSpanInstrumentGroupStatus[] statuses) {
        this.statuses = statuses;
        return this;
    }
}