package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputConfig
 * Input configuration for BatchTranslateText request.
**/
public class InputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GcsSource gcsSource;
    public InputConfig withGcsSource(GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public InputConfig withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}