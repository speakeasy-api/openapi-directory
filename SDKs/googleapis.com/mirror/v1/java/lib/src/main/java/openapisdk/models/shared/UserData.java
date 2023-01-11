package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public UserData withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UserData withValue(String value) {
        this.value = value;
        return this;
    }
}