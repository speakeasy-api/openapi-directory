package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartStreamRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public StartStreamRequest withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loop")
    public Long loop;
    public StartStreamRequest withLoop(Long loop) {
        this.loop = loop;
        return this;
    }
    @JsonProperty("stream_url")
    public String[] streamUrl;
    public StartStreamRequest withStreamUrl(String[] streamUrl) {
        this.streamUrl = streamUrl;
        return this;
    }
}