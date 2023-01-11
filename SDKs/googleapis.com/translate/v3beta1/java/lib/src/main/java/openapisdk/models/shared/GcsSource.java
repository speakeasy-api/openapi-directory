package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcsSource
 * The Google Cloud Storage location for the input content.
**/
public class GcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUri")
    public String inputUri;
    public GcsSource withInputUri(String inputUri) {
        this.inputUri = inputUri;
        return this;
    }
}