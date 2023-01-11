package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeCustomTextFields {
    @JsonProperty("category")
    public EmployeeCustomTextFieldsCategoryEnum category;
    public EmployeeCustomTextFields withCategory(EmployeeCustomTextFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public EmployeeCustomTextFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public EmployeeCustomTextFields withValue(String value) {
        this.value = value;
        return this;
    }
}