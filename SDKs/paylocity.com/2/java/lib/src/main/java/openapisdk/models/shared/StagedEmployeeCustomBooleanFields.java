package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StagedEmployeeCustomBooleanFields {
    @JsonProperty("category")
    public StagedEmployeeCustomBooleanFieldsCategoryEnum category;
    public StagedEmployeeCustomBooleanFields withCategory(StagedEmployeeCustomBooleanFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public StagedEmployeeCustomBooleanFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public StagedEmployeeCustomBooleanFields withValue(Boolean value) {
        this.value = value;
        return this;
    }
}