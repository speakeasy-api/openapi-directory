package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandTaskUpdateUnderstandTaskRequest {
    @SpeakeasyMetadata("form:name=Actions")
    public Object actions;
    public UpdateUnderstandTaskUpdateUnderstandTaskRequest withActions(Object actions) {
        this.actions = actions;
        return this;
    }
    @SpeakeasyMetadata("form:name=ActionsUrl")
    public String actionsUrl;
    public UpdateUnderstandTaskUpdateUnderstandTaskRequest withActionsUrl(String actionsUrl) {
        this.actionsUrl = actionsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateUnderstandTaskUpdateUnderstandTaskRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateUnderstandTaskUpdateUnderstandTaskRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}