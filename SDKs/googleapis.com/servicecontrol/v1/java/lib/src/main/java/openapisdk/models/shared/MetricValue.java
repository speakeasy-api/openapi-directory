package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricValue
 * Represents a single metric value.
**/
public class MetricValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public MetricValue withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionValue")
    public Distribution distributionValue;
    public MetricValue withDistributionValue(Distribution distributionValue) {
        this.distributionValue = distributionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public Double doubleValue;
    public MetricValue withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public MetricValue withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("int64Value")
    public String int64Value;
    public MetricValue withInt64Value(String int64Value) {
        this.int64Value = int64Value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public MetricValue withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moneyValue")
    public Money moneyValue;
    public MetricValue withMoneyValue(Money moneyValue) {
        this.moneyValue = moneyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public MetricValue withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public MetricValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}