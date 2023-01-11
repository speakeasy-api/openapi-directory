package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipCredentialListCreateSipCredentialListRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateSipCredentialListCreateSipCredentialListRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}