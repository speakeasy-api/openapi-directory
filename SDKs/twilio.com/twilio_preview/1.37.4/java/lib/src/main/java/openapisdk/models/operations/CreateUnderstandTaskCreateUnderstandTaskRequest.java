package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandTaskCreateUnderstandTaskRequest {
    @SpeakeasyMetadata("form:name=Actions")
    public Object actions;
    public CreateUnderstandTaskCreateUnderstandTaskRequest withActions(Object actions) {
        this.actions = actions;
        return this;
    }
    @SpeakeasyMetadata("form:name=ActionsUrl")
    public String actionsUrl;
    public CreateUnderstandTaskCreateUnderstandTaskRequest withActionsUrl(String actionsUrl) {
        this.actionsUrl = actionsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateUnderstandTaskCreateUnderstandTaskRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateUnderstandTaskCreateUnderstandTaskRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}