package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateMemberRequestBody
 * Create a Member in invite state 
**/
public class CreateMemberRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public openapisdk.models.shared.MemberActionEnum action;
    public CreateMemberRequestBody withAction(openapisdk.models.shared.MemberActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("channel")
    public openapisdk.models.shared.Channel channel;
    public CreateMemberRequestBody withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("knocking_id")
    public String knockingId;
    public CreateMemberRequestBody withKnockingId(String knockingId) {
        this.knockingId = knockingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public java.util.Map<String, Object> media;
    public CreateMemberRequestBody withMedia(java.util.Map<String, Object> media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_id")
    public String memberId;
    public CreateMemberRequestBody withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_id_inviting")
    public String memberIdInviting;
    public CreateMemberRequestBody withMemberIdInviting(String memberIdInviting) {
        this.memberIdInviting = memberIdInviting;
        return this;
    }
    @JsonProperty("user_id")
    public String userId;
    public CreateMemberRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}