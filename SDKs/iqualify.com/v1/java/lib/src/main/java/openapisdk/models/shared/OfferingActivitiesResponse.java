package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfferingActivitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityId")
    public String activityId;
    public OfferingActivitiesResponse withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Double time;
    public OfferingActivitiesResponse withTime(Double time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OfferingActivitiesResponse withTitle(String title) {
        this.title = title;
        return this;
    }
}