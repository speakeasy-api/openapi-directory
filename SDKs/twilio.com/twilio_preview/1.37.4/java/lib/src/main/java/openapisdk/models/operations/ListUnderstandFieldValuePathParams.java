package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandFieldValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public ListUnderstandFieldValuePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FieldTypeSid")
    public String fieldTypeSid;
    public ListUnderstandFieldValuePathParams withFieldTypeSid(String fieldTypeSid) {
        this.fieldTypeSid = fieldTypeSid;
        return this;
    }
}