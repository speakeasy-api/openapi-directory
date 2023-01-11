package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Office {
    @JsonProperty("label")
    public String label;
    public Office withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Office withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}