package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeries
 * A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
**/
public class TimeSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public MonitoredResourceMetadata metadata;
    public TimeSeries withMetadata(MonitoredResourceMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public Metric metric;
    public TimeSeries withMetric(Metric metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricKind")
    public TimeSeriesMetricKindEnum metricKind;
    public TimeSeries withMetricKind(TimeSeriesMetricKindEnum metricKind) {
        this.metricKind = metricKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public Point[] points;
    public TimeSeries withPoints(Point[] points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public MonitoredResource resource;
    public TimeSeries withResource(MonitoredResource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public TimeSeries withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public TimeSeriesValueTypeEnum valueType;
    public TimeSeries withValueType(TimeSeriesValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}