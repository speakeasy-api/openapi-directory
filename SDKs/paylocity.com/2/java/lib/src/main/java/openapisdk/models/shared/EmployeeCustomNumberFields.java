package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeCustomNumberFields {
    @JsonProperty("category")
    public EmployeeCustomNumberFieldsCategoryEnum category;
    public EmployeeCustomNumberFields withCategory(EmployeeCustomNumberFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public EmployeeCustomNumberFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public EmployeeCustomNumberFields withValue(Double value) {
        this.value = value;
        return this;
    }
}