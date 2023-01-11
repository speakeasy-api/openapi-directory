package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewKeyCreateNewKeyRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateNewKeyCreateNewKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}