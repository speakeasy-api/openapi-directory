package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceWarningsData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ResourceWarningsData withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ResourceWarningsData withValue(String value) {
        this.value = value;
        return this;
    }
}