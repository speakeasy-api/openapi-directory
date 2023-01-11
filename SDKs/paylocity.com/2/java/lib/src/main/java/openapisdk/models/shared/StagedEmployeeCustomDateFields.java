package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StagedEmployeeCustomDateFields {
    @JsonProperty("category")
    public StagedEmployeeCustomDateFieldsCategoryEnum category;
    public StagedEmployeeCustomDateFields withCategory(StagedEmployeeCustomDateFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public StagedEmployeeCustomDateFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public StagedEmployeeCustomDateFields withValue(String value) {
        this.value = value;
        return this;
    }
}