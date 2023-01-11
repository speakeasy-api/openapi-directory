package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamingConfig
 * The config for streaming-based notifications, which send each event as soon as it is detected.
**/
public class StreamingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public StreamingConfig withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}