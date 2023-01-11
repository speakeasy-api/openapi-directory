package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest {
    @SpeakeasyMetadata("form:name=InitiationActions")
    public Object initiationActions;
    public UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest withInitiationActions(Object initiationActions) {
        this.initiationActions = initiationActions;
        return this;
    }
}