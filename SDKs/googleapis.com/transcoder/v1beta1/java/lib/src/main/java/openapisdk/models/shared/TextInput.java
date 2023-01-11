package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextInput
 * Identifies which input file and track should be used.
**/
public class TextInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public TextInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public Integer track;
    public TextInput withTrack(Integer track) {
        this.track = track;
        return this;
    }
}