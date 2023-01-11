package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PingResponseMeta {
    @JsonProperty("id")
    public String id;
    public PingResponseMeta withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("statusEmoji")
    public String statusEmoji;
    public PingResponseMeta withStatusEmoji(String statusEmoji) {
        this.statusEmoji = statusEmoji;
        return this;
    }
}