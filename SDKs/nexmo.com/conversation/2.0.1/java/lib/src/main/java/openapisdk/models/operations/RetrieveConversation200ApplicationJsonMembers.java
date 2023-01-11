package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveConversation200ApplicationJsonMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public openapisdk.models.shared.Channel channel;
    public RetrieveConversation200ApplicationJsonMembers withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initiator")
    public openapisdk.models.shared.Initiator initiator;
    public RetrieveConversation200ApplicationJsonMembers withInitiator(openapisdk.models.shared.Initiator initiator) {
        this.initiator = initiator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_id")
    public String memberId;
    public RetrieveConversation200ApplicationJsonMembers withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RetrieveConversation200ApplicationJsonMembers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public openapisdk.models.shared.MemberStateEnum state;
    public RetrieveConversation200ApplicationJsonMembers withState(openapisdk.models.shared.MemberStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public openapisdk.models.shared.TimestampResMember timestamp;
    public RetrieveConversation200ApplicationJsonMembers withTimestamp(openapisdk.models.shared.TimestampResMember timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public RetrieveConversation200ApplicationJsonMembers withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}