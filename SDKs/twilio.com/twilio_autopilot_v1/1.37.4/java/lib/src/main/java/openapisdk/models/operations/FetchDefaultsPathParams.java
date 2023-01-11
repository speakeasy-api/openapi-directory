package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDefaultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchDefaultsPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
}