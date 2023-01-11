package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EndpointVbcExtension
 * Connect to a VBC extension
**/
public class EndpointVbcExtension {
    @JsonProperty("extension")
    public String extension;
    public EndpointVbcExtension withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EndpointVbcExtension withType(String type) {
        this.type = type;
        return this;
    }
}