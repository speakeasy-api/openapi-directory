package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceCreateServiceRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceCreateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}