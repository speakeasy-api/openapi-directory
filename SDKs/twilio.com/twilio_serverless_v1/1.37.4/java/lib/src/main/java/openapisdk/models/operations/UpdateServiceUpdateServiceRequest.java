package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUpdateServiceRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateServiceUpdateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IncludeCredentials")
    public Boolean includeCredentials;
    public UpdateServiceUpdateServiceRequest withIncludeCredentials(Boolean includeCredentials) {
        this.includeCredentials = includeCredentials;
        return this;
    }
    @SpeakeasyMetadata("form:name=UiEditable")
    public Boolean uiEditable;
    public UpdateServiceUpdateServiceRequest withUiEditable(Boolean uiEditable) {
        this.uiEditable = uiEditable;
        return this;
    }
}