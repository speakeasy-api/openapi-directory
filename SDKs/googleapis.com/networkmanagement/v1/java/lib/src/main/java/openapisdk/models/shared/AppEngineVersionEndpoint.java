package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppEngineVersionEndpoint
 * Wrapper for app engine service version attributes.
**/
public class AppEngineVersionEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public AppEngineVersionEndpoint withUri(String uri) {
        this.uri = uri;
        return this;
    }
}