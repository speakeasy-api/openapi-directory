package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Pipe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public Long mode;
    public Pipe withMode(Long mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Pipe withPath(String path) {
        this.path = path;
        return this;
    }
}