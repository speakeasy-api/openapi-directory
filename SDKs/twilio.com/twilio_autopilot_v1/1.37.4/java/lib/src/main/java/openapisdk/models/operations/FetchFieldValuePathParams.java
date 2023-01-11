package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFieldValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchFieldValuePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FieldTypeSid")
    public String fieldTypeSid;
    public FetchFieldValuePathParams withFieldTypeSid(String fieldTypeSid) {
        this.fieldTypeSid = fieldTypeSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchFieldValuePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}