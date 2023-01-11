package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDocumentInputConfig
 * Input configuration for BatchTranslateDocument request.
**/
public class BatchDocumentInputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GcsSource gcsSource;
    public BatchDocumentInputConfig withGcsSource(GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
}