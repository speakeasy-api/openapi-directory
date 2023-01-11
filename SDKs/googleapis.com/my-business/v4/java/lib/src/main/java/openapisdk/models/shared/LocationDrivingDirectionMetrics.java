package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationDrivingDirectionMetrics
 * A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
**/
public class LocationDrivingDirectionMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public LocationDrivingDirectionMetrics withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public LocationDrivingDirectionMetrics withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topDirectionSources")
    public TopDirectionSources[] topDirectionSources;
    public LocationDrivingDirectionMetrics withTopDirectionSources(TopDirectionSources[] topDirectionSources) {
        this.topDirectionSources = topDirectionSources;
        return this;
    }
}