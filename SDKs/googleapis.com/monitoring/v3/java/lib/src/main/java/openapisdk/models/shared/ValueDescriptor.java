package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValueDescriptor
 * A descriptor for the value columns in a data point.
**/
public class ValueDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ValueDescriptor withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricKind")
    public ValueDescriptorMetricKindEnum metricKind;
    public ValueDescriptor withMetricKind(ValueDescriptorMetricKindEnum metricKind) {
        this.metricKind = metricKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public ValueDescriptor withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public ValueDescriptorValueTypeEnum valueType;
    public ValueDescriptor withValueType(ValueDescriptorValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}