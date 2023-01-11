package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloseApproachData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_approach_date")
    public String closeApproachDate;
    public CloseApproachData withCloseApproachDate(String closeApproachDate) {
        this.closeApproachDate = closeApproachDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_approach_date_full")
    public String closeApproachDateFull;
    public CloseApproachData withCloseApproachDateFull(String closeApproachDateFull) {
        this.closeApproachDateFull = closeApproachDateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epoch_date_close_approach")
    public Long epochDateCloseApproach;
    public CloseApproachData withEpochDateCloseApproach(Long epochDateCloseApproach) {
        this.epochDateCloseApproach = epochDateCloseApproach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miss_distance")
    public MissDistance missDistance;
    public CloseApproachData withMissDistance(MissDistance missDistance) {
        this.missDistance = missDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbiting_body")
    public String orbitingBody;
    public CloseApproachData withOrbitingBody(String orbitingBody) {
        this.orbitingBody = orbitingBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relative_velocity")
    public RelVelocity relativeVelocity;
    public CloseApproachData withRelativeVelocity(RelVelocity relativeVelocity) {
        this.relativeVelocity = relativeVelocity;
        return this;
    }
}