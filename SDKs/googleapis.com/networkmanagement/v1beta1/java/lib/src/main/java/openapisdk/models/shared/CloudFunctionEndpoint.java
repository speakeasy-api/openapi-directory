package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudFunctionEndpoint
 * Wrapper for Cloud Function attributes.
**/
public class CloudFunctionEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public CloudFunctionEndpoint withUri(String uri) {
        this.uri = uri;
        return this;
    }
}