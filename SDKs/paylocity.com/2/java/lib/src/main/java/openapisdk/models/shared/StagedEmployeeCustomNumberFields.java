package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StagedEmployeeCustomNumberFields {
    @JsonProperty("category")
    public StagedEmployeeCustomNumberFieldsCategoryEnum category;
    public StagedEmployeeCustomNumberFields withCategory(StagedEmployeeCustomNumberFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public StagedEmployeeCustomNumberFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public StagedEmployeeCustomNumberFields withValue(Double value) {
        this.value = value;
        return this;
    }
}