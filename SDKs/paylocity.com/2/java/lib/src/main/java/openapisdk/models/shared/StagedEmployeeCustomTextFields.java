package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StagedEmployeeCustomTextFields {
    @JsonProperty("category")
    public StagedEmployeeCustomTextFieldsCategoryEnum category;
    public StagedEmployeeCustomTextFields withCategory(StagedEmployeeCustomTextFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public StagedEmployeeCustomTextFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public StagedEmployeeCustomTextFields withValue(String value) {
        this.value = value;
        return this;
    }
}