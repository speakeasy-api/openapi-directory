package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionalMetricValue
 * A value for a single metric with a given time dimension.
**/
public class DimensionalMetricValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricOption")
    public DimensionalMetricValueMetricOptionEnum metricOption;
    public DimensionalMetricValue withMetricOption(DimensionalMetricValueMetricOptionEnum metricOption) {
        this.metricOption = metricOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeDimension")
    public TimeDimension timeDimension;
    public DimensionalMetricValue withTimeDimension(TimeDimension timeDimension) {
        this.timeDimension = timeDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DimensionalMetricValue withValue(String value) {
        this.value = value;
        return this;
    }
}