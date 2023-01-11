package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public UpdateMemberPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_id")
    public String memberId;
    public UpdateMemberPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}