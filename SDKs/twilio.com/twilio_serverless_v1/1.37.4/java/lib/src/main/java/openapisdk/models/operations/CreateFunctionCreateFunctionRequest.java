package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFunctionCreateFunctionRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateFunctionCreateFunctionRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}