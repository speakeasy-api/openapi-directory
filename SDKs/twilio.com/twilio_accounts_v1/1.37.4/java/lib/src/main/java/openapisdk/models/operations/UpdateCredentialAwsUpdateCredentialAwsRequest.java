package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialAwsUpdateCredentialAwsRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateCredentialAwsUpdateCredentialAwsRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}