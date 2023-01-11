package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostActivity {
    @JsonProperty("activity_type")
    public PostActivityActivityTypeEnum activityType;
    public PostActivity withActivityType(PostActivityActivityTypeEnum activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurred_at")
    public String occurredAt;
    public PostActivity withOccurredAt(String occurredAt) {
        this.occurredAt = occurredAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PostActivity withUrl(String url) {
        this.url = url;
        return this;
    }
}