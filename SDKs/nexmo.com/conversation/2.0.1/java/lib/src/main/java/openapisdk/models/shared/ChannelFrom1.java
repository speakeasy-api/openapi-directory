package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelFrom1
 * Connect to an App User
**/
public class ChannelFrom1 {
    @JsonProperty("type")
    public String type;
    public ChannelFrom1 withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("user")
    public String user;
    public ChannelFrom1 withUser(String user) {
        this.user = user;
        return this;
    }
}