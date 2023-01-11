package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CostCenters {
    @JsonProperty("label")
    public String label;
    public CostCenters withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public CostCenters withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}