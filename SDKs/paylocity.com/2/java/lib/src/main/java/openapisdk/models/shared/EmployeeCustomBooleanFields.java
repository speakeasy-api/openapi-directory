package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeCustomBooleanFields {
    @JsonProperty("category")
    public EmployeeCustomBooleanFieldsCategoryEnum category;
    public EmployeeCustomBooleanFields withCategory(EmployeeCustomBooleanFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public EmployeeCustomBooleanFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public EmployeeCustomBooleanFields withValue(Boolean value) {
        this.value = value;
        return this;
    }
}