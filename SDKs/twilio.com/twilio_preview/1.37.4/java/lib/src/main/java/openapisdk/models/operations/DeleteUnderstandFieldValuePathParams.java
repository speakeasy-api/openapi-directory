package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUnderstandFieldValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public DeleteUnderstandFieldValuePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FieldTypeSid")
    public String fieldTypeSid;
    public DeleteUnderstandFieldValuePathParams withFieldTypeSid(String fieldTypeSid) {
        this.fieldTypeSid = fieldTypeSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteUnderstandFieldValuePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}