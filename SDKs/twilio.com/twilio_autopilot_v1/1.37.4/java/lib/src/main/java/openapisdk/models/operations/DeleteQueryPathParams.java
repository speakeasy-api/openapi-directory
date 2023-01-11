package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public DeleteQueryPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteQueryPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}