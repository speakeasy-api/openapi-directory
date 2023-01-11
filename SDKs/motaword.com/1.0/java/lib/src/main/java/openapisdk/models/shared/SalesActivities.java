package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SalesActivities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public SalesActivity[] activities;
    public SalesActivities withActivities(SalesActivity[] activities) {
        this.activities = activities;
        return this;
    }
}