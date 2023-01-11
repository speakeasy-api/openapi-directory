package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Attribute {
    @JsonProperty("label")
    public String label;
    public Attribute withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Attribute withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}