package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioRenderTimelineSpanRegionKey
 * The key signature active at the beginning of the region
**/
public class AudioRenderTimelineSpanRegionKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tonic_accidental")
    public AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum tonicAccidental;
    public AudioRenderTimelineSpanRegionKey withTonicAccidental(AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum tonicAccidental) {
        this.tonicAccidental = tonicAccidental;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tonic_note")
    public AudioRenderTimelineSpanRegionKeyTonicNoteEnum tonicNote;
    public AudioRenderTimelineSpanRegionKey withTonicNote(AudioRenderTimelineSpanRegionKeyTonicNoteEnum tonicNote) {
        this.tonicNote = tonicNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tonic_quality")
    public AudioRenderTimelineSpanRegionKeyTonicQualityEnum tonicQuality;
    public AudioRenderTimelineSpanRegionKey withTonicQuality(AudioRenderTimelineSpanRegionKeyTonicQualityEnum tonicQuality) {
        this.tonicQuality = tonicQuality;
        return this;
    }
}