package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1alpha1MetricsRow
 * Represents a row of dimensions and metrics.
**/
public class GooglePlayDeveloperReportingV1alpha1MetricsRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPeriod")
    public GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum aggregationPeriod;
    public GooglePlayDeveloperReportingV1alpha1MetricsRow withAggregationPeriod(GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum aggregationPeriod) {
        this.aggregationPeriod = aggregationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public GooglePlayDeveloperReportingV1alpha1DimensionValue[] dimensions;
    public GooglePlayDeveloperReportingV1alpha1MetricsRow withDimensions(GooglePlayDeveloperReportingV1alpha1DimensionValue[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public GooglePlayDeveloperReportingV1alpha1MetricValue[] metrics;
    public GooglePlayDeveloperReportingV1alpha1MetricsRow withMetrics(GooglePlayDeveloperReportingV1alpha1MetricValue[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public GoogleTypeDateTime startTime;
    public GooglePlayDeveloperReportingV1alpha1MetricsRow withStartTime(GoogleTypeDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}