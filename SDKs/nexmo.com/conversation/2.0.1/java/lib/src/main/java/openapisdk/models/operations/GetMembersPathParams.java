package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public GetMembersPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}