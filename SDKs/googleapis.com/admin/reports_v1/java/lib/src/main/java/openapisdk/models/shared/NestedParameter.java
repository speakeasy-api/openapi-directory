package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NestedParameter
 * JSON template for a parameter used in various reports.
**/
public class NestedParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public NestedParameter withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intValue")
    public String intValue;
    public NestedParameter withIntValue(String intValue) {
        this.intValue = intValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiBoolValue")
    public Boolean[] multiBoolValue;
    public NestedParameter withMultiBoolValue(Boolean[] multiBoolValue) {
        this.multiBoolValue = multiBoolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiIntValue")
    public String[] multiIntValue;
    public NestedParameter withMultiIntValue(String[] multiIntValue) {
        this.multiIntValue = multiIntValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiValue")
    public String[] multiValue;
    public NestedParameter withMultiValue(String[] multiValue) {
        this.multiValue = multiValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NestedParameter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public NestedParameter withValue(String value) {
        this.value = value;
        return this;
    }
}