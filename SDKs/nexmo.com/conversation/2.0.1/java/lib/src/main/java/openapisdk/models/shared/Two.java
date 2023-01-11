package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Two
 * Connect to a SIP Endpoint
**/
public class Two {
    @JsonProperty("type")
    public String type;
    public Two withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Two withUri(String uri) {
        this.uri = uri;
        return this;
    }
}