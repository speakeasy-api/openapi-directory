package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Header
 * Defines a header message. A header can have a key and a value.
**/
public class Header {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Header withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Header withValue(String value) {
        this.value = value;
        return this;
    }
}