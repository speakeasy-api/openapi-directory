package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeCustomDateFields {
    @JsonProperty("category")
    public EmployeeCustomDateFieldsCategoryEnum category;
    public EmployeeCustomDateFields withCategory(EmployeeCustomDateFieldsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public EmployeeCustomDateFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public EmployeeCustomDateFields withValue(String value) {
        this.value = value;
        return this;
    }
}