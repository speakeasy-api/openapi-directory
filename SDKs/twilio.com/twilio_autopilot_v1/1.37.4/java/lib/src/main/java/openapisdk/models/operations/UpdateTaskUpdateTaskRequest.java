package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskUpdateTaskRequest {
    @SpeakeasyMetadata("form:name=Actions")
    public Object actions;
    public UpdateTaskUpdateTaskRequest withActions(Object actions) {
        this.actions = actions;
        return this;
    }
    @SpeakeasyMetadata("form:name=ActionsUrl")
    public String actionsUrl;
    public UpdateTaskUpdateTaskRequest withActionsUrl(String actionsUrl) {
        this.actionsUrl = actionsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateTaskUpdateTaskRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateTaskUpdateTaskRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}