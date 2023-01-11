package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeCustomDropDownFields {
    @JsonProperty("category")
    public EmployeeCustomDropDownFieldsCategoryEnum category;
    public EmployeeCustomDropDownFields withCategory(EmployeeCustomDropDownFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public EmployeeCustomDropDownFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public EmployeeCustomDropDownFields withValue(String value) {
        this.value = value;
        return this;
    }
}