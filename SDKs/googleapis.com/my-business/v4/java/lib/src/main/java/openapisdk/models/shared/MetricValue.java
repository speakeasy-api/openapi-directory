package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricValue
 * A value for a single Metric from a starting time.
**/
public class MetricValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionalValues")
    public DimensionalMetricValue[] dimensionalValues;
    public MetricValue withDimensionalValues(DimensionalMetricValue[] dimensionalValues) {
        this.dimensionalValues = dimensionalValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public MetricValueMetricEnum metric;
    public MetricValue withMetric(MetricValueMetricEnum metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalValue")
    public DimensionalMetricValue totalValue;
    public MetricValue withTotalValue(DimensionalMetricValue totalValue) {
        this.totalValue = totalValue;
        return this;
    }
}