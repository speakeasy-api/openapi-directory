package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StagedEmployeeCustomDropDownFields {
    @JsonProperty("category")
    public StagedEmployeeCustomDropDownFieldsCategoryEnum category;
    public StagedEmployeeCustomDropDownFields withCategory(StagedEmployeeCustomDropDownFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public StagedEmployeeCustomDropDownFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public StagedEmployeeCustomDropDownFields withValue(String value) {
        this.value = value;
        return this;
    }
}