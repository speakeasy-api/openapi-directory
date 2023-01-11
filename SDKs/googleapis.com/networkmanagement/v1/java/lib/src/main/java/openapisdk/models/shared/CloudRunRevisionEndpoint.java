package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRunRevisionEndpoint
 * Wrapper for Cloud Run revision attributes.
**/
public class CloudRunRevisionEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public CloudRunRevisionEndpoint withUri(String uri) {
        this.uri = uri;
        return this;
    }
}