package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest {
    @SpeakeasyMetadata("form:name=Actions")
    public Object actions;
    public UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest withActions(Object actions) {
        this.actions = actions;
        return this;
    }
}