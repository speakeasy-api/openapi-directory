package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Script
 * Script runnable.
**/
public class Script {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Script withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Script withText(String text) {
        this.text = text;
        return this;
    }
}