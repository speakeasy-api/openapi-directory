package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUnderstandAssistantFallbackActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchUnderstandAssistantFallbackActionsPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
}