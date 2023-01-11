package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Label
 * A label to apply to this replica pool.
**/
public class Label {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Label withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Label withValue(String value) {
        this.value = value;
        return this;
    }
}