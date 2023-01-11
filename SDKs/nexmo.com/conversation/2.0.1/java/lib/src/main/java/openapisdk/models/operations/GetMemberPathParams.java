package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public GetMemberPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_id")
    public String memberId;
    public GetMemberPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}