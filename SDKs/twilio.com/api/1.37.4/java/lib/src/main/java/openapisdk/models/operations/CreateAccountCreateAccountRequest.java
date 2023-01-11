package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountCreateAccountRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateAccountCreateAccountRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}