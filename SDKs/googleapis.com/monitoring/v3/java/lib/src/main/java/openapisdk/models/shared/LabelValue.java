package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelValue
 * A label value.
**/
public class LabelValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public LabelValue withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("int64Value")
    public String int64Value;
    public LabelValue withInt64Value(String int64Value) {
        this.int64Value = int64Value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public LabelValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}