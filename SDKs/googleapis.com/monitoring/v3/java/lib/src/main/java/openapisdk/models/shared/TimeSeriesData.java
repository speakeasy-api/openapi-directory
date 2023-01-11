package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesData
 * Represents the values of a time series associated with a TimeSeriesDescriptor.
**/
public class TimeSeriesData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelValues")
    public LabelValue[] labelValues;
    public TimeSeriesData withLabelValues(LabelValue[] labelValues) {
        this.labelValues = labelValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointData")
    public PointData[] pointData;
    public TimeSeriesData withPointData(PointData[] pointData) {
        this.pointData = pointData;
        return this;
    }
}