package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelFrom5
 * Connect to a VBC extension
**/
public class ChannelFrom5 {
    @JsonProperty("extension")
    public String extension;
    public ChannelFrom5 withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ChannelFrom5 withType(String type) {
        this.type = type;
        return this;
    }
}