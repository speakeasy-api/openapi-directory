package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest {
    @SpeakeasyMetadata("form:name=FallbackActions")
    public Object fallbackActions;
    public UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest withFallbackActions(Object fallbackActions) {
        this.fallbackActions = fallbackActions;
        return this;
    }
}