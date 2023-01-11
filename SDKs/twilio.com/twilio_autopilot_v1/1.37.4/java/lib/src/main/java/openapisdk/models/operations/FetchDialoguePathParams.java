package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDialoguePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchDialoguePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchDialoguePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}