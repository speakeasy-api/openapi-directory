package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputConfig
 * The output content
**/
public class OutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestination")
    public GcsDestination gcsDestination;
    public OutputConfig withGcsDestination(GcsDestination gcsDestination) {
        this.gcsDestination = gcsDestination;
        return this;
    }
}