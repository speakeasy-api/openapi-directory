package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFieldTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchFieldTypePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchFieldTypePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}