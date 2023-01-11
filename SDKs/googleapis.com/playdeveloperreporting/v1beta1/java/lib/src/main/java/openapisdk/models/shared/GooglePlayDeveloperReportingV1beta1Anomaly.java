package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1beta1Anomaly
 * Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
public class GooglePlayDeveloperReportingV1beta1Anomaly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public GooglePlayDeveloperReportingV1beta1DimensionValue[] dimensions;
    public GooglePlayDeveloperReportingV1beta1Anomaly withDimensions(GooglePlayDeveloperReportingV1beta1DimensionValue[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public GooglePlayDeveloperReportingV1beta1MetricValue metric;
    public GooglePlayDeveloperReportingV1beta1Anomaly withMetric(GooglePlayDeveloperReportingV1beta1MetricValue metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricSet")
    public String metricSet;
    public GooglePlayDeveloperReportingV1beta1Anomaly withMetricSet(String metricSet) {
        this.metricSet = metricSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePlayDeveloperReportingV1beta1Anomaly withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timelineSpec")
    public GooglePlayDeveloperReportingV1beta1TimelineSpec timelineSpec;
    public GooglePlayDeveloperReportingV1beta1Anomaly withTimelineSpec(GooglePlayDeveloperReportingV1beta1TimelineSpec timelineSpec) {
        this.timelineSpec = timelineSpec;
        return this;
    }
}