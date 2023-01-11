package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Point
 * A single data point in a time series.
**/
public class Point {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public TimeInterval interval;
    public Point withInterval(TimeInterval interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public TypedValue value;
    public Point withValue(TypedValue value) {
        this.value = value;
        return this;
    }
}