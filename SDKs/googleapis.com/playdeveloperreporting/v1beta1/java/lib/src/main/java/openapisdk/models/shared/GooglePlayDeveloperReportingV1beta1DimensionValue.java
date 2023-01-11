package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1beta1DimensionValue
 * Represents the value of a single dimension.
**/
public class GooglePlayDeveloperReportingV1beta1DimensionValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public String dimension;
    public GooglePlayDeveloperReportingV1beta1DimensionValue withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("int64Value")
    public String int64Value;
    public GooglePlayDeveloperReportingV1beta1DimensionValue withInt64Value(String int64Value) {
        this.int64Value = int64Value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public GooglePlayDeveloperReportingV1beta1DimensionValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueLabel")
    public String valueLabel;
    public GooglePlayDeveloperReportingV1beta1DimensionValue withValueLabel(String valueLabel) {
        this.valueLabel = valueLabel;
        return this;
    }
}