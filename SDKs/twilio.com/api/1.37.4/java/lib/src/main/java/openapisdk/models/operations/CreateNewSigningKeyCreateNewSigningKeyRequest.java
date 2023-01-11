package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewSigningKeyCreateNewSigningKeyRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateNewSigningKeyCreateNewSigningKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}