package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommuteInfo
 * Output only. Commute details related to this job.
**/
public class CommuteInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobLocation")
    public Location jobLocation;
    public CommuteInfo withJobLocation(Location jobLocation) {
        this.jobLocation = jobLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelDuration")
    public String travelDuration;
    public CommuteInfo withTravelDuration(String travelDuration) {
        this.travelDuration = travelDuration;
        return this;
    }
}