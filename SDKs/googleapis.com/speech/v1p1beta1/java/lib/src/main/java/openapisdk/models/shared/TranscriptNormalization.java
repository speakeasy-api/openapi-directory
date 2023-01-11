package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranscriptNormalization
 * Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
**/
public class TranscriptNormalization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public Entry[] entries;
    public TranscriptNormalization withEntries(Entry[] entries) {
        this.entries = entries;
        return this;
    }
}