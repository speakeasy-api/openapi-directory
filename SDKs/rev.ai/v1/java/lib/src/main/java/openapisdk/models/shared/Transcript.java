package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transcript
 * Rev.ai Transcript Model
 * ***
 * Note: properties are not displayed in the returned object if they are null
 * 
 * Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
 * 
**/
public class Transcript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monologues")
    public TranscriptMonologues[] monologues;
    public Transcript withMonologues(TranscriptMonologues[] monologues) {
        this.monologues = monologues;
        return this;
    }
}