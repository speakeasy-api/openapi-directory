package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkSchedule {
    @JsonProperty("label")
    public String label;
    public WorkSchedule withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public WorkSchedule withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}