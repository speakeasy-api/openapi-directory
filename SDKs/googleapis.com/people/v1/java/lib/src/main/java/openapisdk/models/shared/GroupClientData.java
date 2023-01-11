package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupClientData
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
**/
public class GroupClientData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public GroupClientData withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GroupClientData withValue(String value) {
        this.value = value;
        return this;
    }
}