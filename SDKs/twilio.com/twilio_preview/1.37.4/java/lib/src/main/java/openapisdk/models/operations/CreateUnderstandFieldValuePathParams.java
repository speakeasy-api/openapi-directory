package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandFieldValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public CreateUnderstandFieldValuePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FieldTypeSid")
    public String fieldTypeSid;
    public CreateUnderstandFieldValuePathParams withFieldTypeSid(String fieldTypeSid) {
        this.fieldTypeSid = fieldTypeSid;
        return this;
    }
}