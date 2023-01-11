package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConversationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}