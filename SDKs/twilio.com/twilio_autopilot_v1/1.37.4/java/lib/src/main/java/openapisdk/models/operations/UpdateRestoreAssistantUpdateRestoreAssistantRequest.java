package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRestoreAssistantUpdateRestoreAssistantRequest {
    @SpeakeasyMetadata("form:name=Assistant")
    public String assistant;
    public UpdateRestoreAssistantUpdateRestoreAssistantRequest withAssistant(String assistant) {
        this.assistant = assistant;
        return this;
    }
}