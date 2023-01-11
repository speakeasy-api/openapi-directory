package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationMetrics
 * A series of Metrics and BreakdownMetrics associated with a Location over some time range.
**/
public class LocationMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public LocationMetrics withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricValues")
    public MetricValue[] metricValues;
    public LocationMetrics withMetricValues(MetricValue[] metricValues) {
        this.metricValues = metricValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public LocationMetrics withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}