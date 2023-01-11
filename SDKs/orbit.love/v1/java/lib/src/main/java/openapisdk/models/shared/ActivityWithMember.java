package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityWithMember {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_type")
    public String activityType;
    public ActivityWithMember withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ActivityWithMember withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ActivityWithMember withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public ActivityWithMember withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_text")
    public String linkText;
    public ActivityWithMember withLinkText(String linkText) {
        this.linkText = linkText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public Member member;
    public ActivityWithMember withMember(Member member) {
        this.member = member;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurred_at")
    public String occurredAt;
    public ActivityWithMember withOccurredAt(String occurredAt) {
        this.occurredAt = occurredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ActivityWithMember withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ActivityWithMember withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public String weight;
    public ActivityWithMember withWeight(String weight) {
        this.weight = weight;
        return this;
    }
}