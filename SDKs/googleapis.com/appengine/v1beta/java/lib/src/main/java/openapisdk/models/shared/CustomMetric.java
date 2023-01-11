package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomMetric
 * Allows autoscaling based on Stackdriver metrics.
**/
public class CustomMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public CustomMetric withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public CustomMetric withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleInstanceAssignment")
    public Double singleInstanceAssignment;
    public CustomMetric withSingleInstanceAssignment(Double singleInstanceAssignment) {
        this.singleInstanceAssignment = singleInstanceAssignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetType")
    public String targetType;
    public CustomMetric withTargetType(String targetType) {
        this.targetType = targetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetUtilization")
    public Double targetUtilization;
    public CustomMetric withTargetUtilization(Double targetUtilization) {
        this.targetUtilization = targetUtilization;
        return this;
    }
}