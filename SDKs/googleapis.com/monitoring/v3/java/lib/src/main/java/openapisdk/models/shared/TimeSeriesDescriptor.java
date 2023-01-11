package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesDescriptor
 * A descriptor for the labels and points in a time series.
**/
public class TimeSeriesDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelDescriptors")
    public LabelDescriptor[] labelDescriptors;
    public TimeSeriesDescriptor withLabelDescriptors(LabelDescriptor[] labelDescriptors) {
        this.labelDescriptors = labelDescriptors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointDescriptors")
    public ValueDescriptor[] pointDescriptors;
    public TimeSeriesDescriptor withPointDescriptors(ValueDescriptor[] pointDescriptors) {
        this.pointDescriptors = pointDescriptors;
        return this;
    }
}