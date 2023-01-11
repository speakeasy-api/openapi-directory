package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSigningKeyUpdateSigningKeyRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateSigningKeyUpdateSigningKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}