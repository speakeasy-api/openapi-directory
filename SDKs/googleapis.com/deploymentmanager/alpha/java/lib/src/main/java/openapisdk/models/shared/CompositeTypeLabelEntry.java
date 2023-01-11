package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompositeTypeLabelEntry
 * Label object for CompositeTypes
**/
public class CompositeTypeLabelEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public CompositeTypeLabelEntry withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CompositeTypeLabelEntry withValue(String value) {
        this.value = value;
        return this;
    }
}