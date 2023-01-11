package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteConversationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}