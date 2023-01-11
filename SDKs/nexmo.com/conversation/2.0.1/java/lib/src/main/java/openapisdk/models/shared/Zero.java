package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Zero
 * Connect to an App User
**/
public class Zero {
    @JsonProperty("type")
    public String type;
    public Zero withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("user")
    public String user;
    public Zero withUser(String user) {
        this.user = user;
        return this;
    }
}