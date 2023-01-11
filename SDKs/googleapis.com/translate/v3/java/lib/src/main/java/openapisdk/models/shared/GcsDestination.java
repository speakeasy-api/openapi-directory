package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcsDestination
 * The Google Cloud Storage location for the output content.
**/
public class GcsDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUriPrefix")
    public String outputUriPrefix;
    public GcsDestination withOutputUriPrefix(String outputUriPrefix) {
        this.outputUriPrefix = outputUriPrefix;
        return this;
    }
}