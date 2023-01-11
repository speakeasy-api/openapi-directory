package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activity[] activities;
    public ActivityList withActivities(Activity[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public ActivityList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
}