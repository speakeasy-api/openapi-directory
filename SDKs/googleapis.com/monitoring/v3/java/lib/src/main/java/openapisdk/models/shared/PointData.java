package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PointData
 * A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
**/
public class PointData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeInterval")
    public TimeInterval timeInterval;
    public PointData withTimeInterval(TimeInterval timeInterval) {
        this.timeInterval = timeInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public TypedValue[] values;
    public PointData withValues(TypedValue[] values) {
        this.values = values;
        return this;
    }
}