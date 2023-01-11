package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Value
 * Data type and value of a parameter.
**/
public class GoogleCloudChannelV1Value {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public GoogleCloudChannelV1Value withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public Double doubleValue;
    public GoogleCloudChannelV1Value withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("int64Value")
    public String int64Value;
    public GoogleCloudChannelV1Value withInt64Value(String int64Value) {
        this.int64Value = int64Value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protoValue")
    public java.util.Map<String, Object> protoValue;
    public GoogleCloudChannelV1Value withProtoValue(java.util.Map<String, Object> protoValue) {
        this.protoValue = protoValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public GoogleCloudChannelV1Value withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}