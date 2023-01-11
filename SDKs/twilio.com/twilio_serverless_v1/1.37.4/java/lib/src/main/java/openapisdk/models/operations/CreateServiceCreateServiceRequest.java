package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceCreateServiceRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceCreateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IncludeCredentials")
    public Boolean includeCredentials;
    public CreateServiceCreateServiceRequest withIncludeCredentials(Boolean includeCredentials) {
        this.includeCredentials = includeCredentials;
        return this;
    }
    @SpeakeasyMetadata("form:name=UiEditable")
    public Boolean uiEditable;
    public CreateServiceCreateServiceRequest withUiEditable(Boolean uiEditable) {
        this.uiEditable = uiEditable;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateServiceCreateServiceRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}