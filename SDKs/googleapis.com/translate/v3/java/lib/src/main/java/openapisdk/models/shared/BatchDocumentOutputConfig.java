package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDocumentOutputConfig
 * Output configuration for BatchTranslateDocument request.
**/
public class BatchDocumentOutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestination")
    public GcsDestination gcsDestination;
    public BatchDocumentOutputConfig withGcsDestination(GcsDestination gcsDestination) {
        this.gcsDestination = gcsDestination;
        return this;
    }
}