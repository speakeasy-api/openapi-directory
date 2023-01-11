package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public DeleteMemberPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_id")
    public String memberId;
    public DeleteMemberPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}