package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1beta1MetricValue
 * Represents the value of a metric.
**/
public class GooglePlayDeveloperReportingV1beta1MetricValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decimalValue")
    public GoogleTypeDecimal decimalValue;
    public GooglePlayDeveloperReportingV1beta1MetricValue withDecimalValue(GoogleTypeDecimal decimalValue) {
        this.decimalValue = decimalValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public String metric;
    public GooglePlayDeveloperReportingV1beta1MetricValue withMetric(String metric) {
        this.metric = metric;
        return this;
    }
}