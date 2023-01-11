package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Department {
    @JsonProperty("label")
    public String label;
    public Department withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Department withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}