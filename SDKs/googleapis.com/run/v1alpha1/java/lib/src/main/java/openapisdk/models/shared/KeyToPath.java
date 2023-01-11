package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyToPath
 * Maps a string key to a path within a volume.
**/
public class KeyToPath {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public KeyToPath withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public Integer mode;
    public KeyToPath withMode(Integer mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public KeyToPath withPath(String path) {
        this.path = path;
        return this;
    }
}