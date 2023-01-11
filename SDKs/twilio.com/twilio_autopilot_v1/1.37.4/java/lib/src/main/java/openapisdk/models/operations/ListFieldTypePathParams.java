package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFieldTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public ListFieldTypePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
}