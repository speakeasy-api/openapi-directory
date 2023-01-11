package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StepLabelsEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public StepLabelsEntry withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public StepLabelsEntry withValue(String value) {
        this.value = value;
        return this;
    }
}