package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEndUserUpdateEndUserRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public Object attributes;
    public UpdateEndUserUpdateEndUserRequest withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateEndUserUpdateEndUserRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}