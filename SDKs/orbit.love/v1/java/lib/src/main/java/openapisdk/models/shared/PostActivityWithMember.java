package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostActivityWithMember {
    @JsonProperty("activity_type")
    public PostActivityWithMemberActivityTypeEnum activityType;
    public PostActivityWithMember withActivityType(PostActivityWithMemberActivityTypeEnum activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public Member member;
    public PostActivityWithMember withMember(Member member) {
        this.member = member;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurred_at")
    public String occurredAt;
    public PostActivityWithMember withOccurredAt(String occurredAt) {
        this.occurredAt = occurredAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PostActivityWithMember withUrl(String url) {
        this.url = url;
        return this;
    }
}