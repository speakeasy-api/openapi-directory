package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUnderstandAssistantInitiationActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchUnderstandAssistantInitiationActionsPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
}