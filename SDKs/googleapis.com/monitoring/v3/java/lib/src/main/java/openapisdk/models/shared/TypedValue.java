package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TypedValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public TypedValue withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionValue")
    public Distribution distributionValue;
    public TypedValue withDistributionValue(Distribution distributionValue) {
        this.distributionValue = distributionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public Double doubleValue;
    public TypedValue withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("int64Value")
    public String int64Value;
    public TypedValue withInt64Value(String int64Value) {
        this.int64Value = int64Value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public TypedValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}