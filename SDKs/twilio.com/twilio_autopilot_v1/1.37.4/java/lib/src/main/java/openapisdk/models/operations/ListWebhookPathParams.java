package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public ListWebhookPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
}