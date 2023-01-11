package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}