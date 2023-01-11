package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MatchVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public MatchVideos withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MatchVideos withType(String type) {
        this.type = type;
        return this;
    }
}