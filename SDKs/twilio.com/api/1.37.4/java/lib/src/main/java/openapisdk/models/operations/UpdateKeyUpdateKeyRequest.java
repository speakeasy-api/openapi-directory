package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKeyUpdateKeyRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateKeyUpdateKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}