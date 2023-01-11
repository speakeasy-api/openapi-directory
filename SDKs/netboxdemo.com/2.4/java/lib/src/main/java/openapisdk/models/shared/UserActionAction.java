package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserActionAction {
    @JsonProperty("label")
    public String label;
    public UserActionAction withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public UserActionAction withValue(Long value) {
        this.value = value;
        return this;
    }
}