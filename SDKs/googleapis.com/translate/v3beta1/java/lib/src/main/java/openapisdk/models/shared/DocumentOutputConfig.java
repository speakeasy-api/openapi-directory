package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentOutputConfig
 * A document translation request output config.
**/
public class DocumentOutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestination")
    public GcsDestination gcsDestination;
    public DocumentOutputConfig withGcsDestination(GcsDestination gcsDestination) {
        this.gcsDestination = gcsDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public DocumentOutputConfig withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}