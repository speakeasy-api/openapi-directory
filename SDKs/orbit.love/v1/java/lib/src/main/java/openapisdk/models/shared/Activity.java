package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_type")
    public String activityType;
    public Activity withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Activity withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Activity withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Activity withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_text")
    public String linkText;
    public Activity withLinkText(String linkText) {
        this.linkText = linkText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurred_at")
    public String occurredAt;
    public Activity withOccurredAt(String occurredAt) {
        this.occurredAt = occurredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Activity withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Activity withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public String weight;
    public Activity withWeight(String weight) {
        this.weight = weight;
        return this;
    }
}