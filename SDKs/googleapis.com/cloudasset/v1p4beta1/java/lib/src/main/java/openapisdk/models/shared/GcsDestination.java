package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcsDestination
 * A Cloud Storage location.
**/
public class GcsDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GcsDestination withUri(String uri) {
        this.uri = uri;
        return this;
    }
}