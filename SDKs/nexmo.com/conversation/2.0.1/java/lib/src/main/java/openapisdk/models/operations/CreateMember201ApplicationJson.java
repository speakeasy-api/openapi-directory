package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMember201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public openapisdk.models.shared.Channel channel;
    public CreateMember201ApplicationJson withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public CreateMember201ApplicationJson withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateMember201ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initiator")
    public openapisdk.models.shared.Initiator initiator;
    public CreateMember201ApplicationJson withInitiator(openapisdk.models.shared.Initiator initiator) {
        this.initiator = initiator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public openapisdk.models.shared.MemberStateEnum state;
    public CreateMember201ApplicationJson withState(openapisdk.models.shared.MemberStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public openapisdk.models.shared.TimestampResMember timestamp;
    public CreateMember201ApplicationJson withTimestamp(openapisdk.models.shared.TimestampResMember timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public CreateMember201ApplicationJson withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}