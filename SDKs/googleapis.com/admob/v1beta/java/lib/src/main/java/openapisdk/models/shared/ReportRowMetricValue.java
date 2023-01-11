package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportRowMetricValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public Double doubleValue;
    public ReportRowMetricValue withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerValue")
    public String integerValue;
    public ReportRowMetricValue withIntegerValue(String integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsValue")
    public String microsValue;
    public ReportRowMetricValue withMicrosValue(String microsValue) {
        this.microsValue = microsValue;
        return this;
    }
}