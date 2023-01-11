package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchStyleSheetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchStyleSheetPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
}