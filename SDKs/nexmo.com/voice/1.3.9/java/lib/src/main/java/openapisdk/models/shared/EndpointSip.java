package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointSip
 * Connect to a SIP Endpoint
**/
public class EndpointSip {
    @JsonProperty("type")
    public String type;
    public EndpointSip withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public EndpointSip withUri(String uri) {
        this.uri = uri;
        return this;
    }
}