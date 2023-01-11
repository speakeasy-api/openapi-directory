package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDefaultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public UpdateDefaultsPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
}