package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranscriptOutputConfig
 * Specifies an optional destination for the recognition results.
**/
public class TranscriptOutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsUri")
    public String gcsUri;
    public TranscriptOutputConfig withGcsUri(String gcsUri) {
        this.gcsUri = gcsUri;
        return this;
    }
}