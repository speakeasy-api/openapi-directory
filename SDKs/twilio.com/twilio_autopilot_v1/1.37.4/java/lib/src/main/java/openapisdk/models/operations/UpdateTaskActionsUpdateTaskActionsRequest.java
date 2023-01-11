package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskActionsUpdateTaskActionsRequest {
    @SpeakeasyMetadata("form:name=Actions")
    public Object actions;
    public UpdateTaskActionsUpdateTaskActionsRequest withActions(Object actions) {
        this.actions = actions;
        return this;
    }
}