package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskCreateTaskRequest {
    @SpeakeasyMetadata("form:name=Actions")
    public Object actions;
    public CreateTaskCreateTaskRequest withActions(Object actions) {
        this.actions = actions;
        return this;
    }
    @SpeakeasyMetadata("form:name=ActionsUrl")
    public String actionsUrl;
    public CreateTaskCreateTaskRequest withActionsUrl(String actionsUrl) {
        this.actionsUrl = actionsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateTaskCreateTaskRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateTaskCreateTaskRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}